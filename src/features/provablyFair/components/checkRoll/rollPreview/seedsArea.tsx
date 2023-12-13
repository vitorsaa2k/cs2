import { RollType } from "../../../types/api";
import { ClientSeed } from "../previewItems/clientSeed";
import { Nonce } from "../previewItems/nonce";
import { PublicHash } from "../previewItems/publicHash";
import { Roll } from "../previewItems/roll";
import { SecretSalt } from "../previewItems/secretSalt";
import { ServerSeed } from "../previewItems/serverSeed";

export function SeedsArea({ roll }: { roll: RollType }) {
	return (
		<div className="flex flex-col gap-2 w-full">
			<ClientSeed clientSeed={roll.clientSeed} />
			<ServerSeed serverSeed={roll.serverSeed} />
			<SecretSalt secretSalt={roll.secretSalt} />
			<PublicHash publicHash={roll.publicHash} />
			<Nonce nonce={roll.nonce} />
			<Roll roll={roll.roll} />
		</div>
	);
}
