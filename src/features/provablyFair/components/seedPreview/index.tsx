import { useState } from "react";
import { ClientSeed } from "./clientSeed";
import { Nonce } from "./nonce";
import { PublicHash } from "./publicHash";
import { SecretSalt } from "./secretSalt";
import { ServerSeed } from "./serverSeed";
import { ServerSeedHistoryModal } from "./serverModal";
import { useGetUserPublicSeeds } from "../../../../hooks/useQuery/seeds";
import { TailSpinner } from "../../../../components/spinner";

export function SeedPreview() {
	const { data: seed, isLoading } = useGetUserPublicSeeds();
	const [isShowing, setIsShowing] = useState(false);

	return (
		<section className="m-2 flex flex-col gap-2">
			{isLoading ? (
				<TailSpinner height={30} width={30} visible />
			) : seed ? (
				<>
					<ClientSeed clientSeed={seed.clientSeed} />
					<ServerSeed openServerHistoryModal={() => setIsShowing(true)} />
					<SecretSalt />
					<PublicHash publicHash={seed.publicHash} />
					<Nonce nonce={seed.nonce} />
					{isShowing ? (
						<ServerSeedHistoryModal onClose={() => setIsShowing(false)} />
					) : null}
				</>
			) : (
				<div>You have to be logged in to see your seed</div>
			)}
		</section>
	);
}
