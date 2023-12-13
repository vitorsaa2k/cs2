import { useEffect, useState } from "react";
import { ClientSeed } from "./clientSeed";
import { Nonce } from "./nonce";
import { PublicHash } from "./publicHash";
import { SecretSalt } from "./secretSalt";
import { ServerSeed } from "./serverSeed";
import { getUserPublicSeeds } from "../../../../services/userApi";
import { ServerSeedHistoryModal } from "./serverModal";

export function SeedPreview() {
	const [seeds, setSeeds] = useState({
		clientSeed: "",
		publicHash: "",
		nonce: 0,
	});
	const [isShowing, setIsShowing] = useState(false);
	useEffect(() => {
		getUserPublicSeeds().then(res => setSeeds(res));
	}, []);
	return (
		<section className="m-2 flex flex-col gap-2">
			<ClientSeed clientSeed={seeds.clientSeed} />
			<ServerSeed openServerHistoryModal={() => setIsShowing(true)} />
			<SecretSalt />
			<PublicHash publicHash={seeds.publicHash} />
			<Nonce nonce={seeds.nonce} />
			{isShowing ? (
				<ServerSeedHistoryModal onClose={() => setIsShowing(false)} />
			) : null}
		</section>
	);
}
