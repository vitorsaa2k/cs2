import { PiCheck, PiCopy } from "react-icons/pi";
import { RollType } from "../../../types/api";
import { useState } from "react";
import { IconContext } from "react-icons";

export function JsonArea({ roll }: { roll: RollType }) {
	const [isCopied, setIsCopied] = useState(false);
	const json = `{
	"serverSeed": "${roll.serverSeed}",
	"salt": "${roll.secretSalt}",
	"publicHash": "${roll.publicHash}",
	"clientSeed": "${roll.clientSeed}",
	"nonce": ${roll.nonce},
	"roll": ${roll.roll}
}`;

	function copyJsonToClipboard() {
		navigator.clipboard.writeText(json).then(() => setIsCopied(true));
	}
	return (
		<div className="border relative rounded bg-zinc-800 h-full max-w-sm overflow-hidden overflow-x-auto thinScrollBar">
			<p
				onClick={copyJsonToClipboard}
				className="absolute top-0 left-0 text-sm flex items-center gap-1 bg-zinc-700 rounded-ee hover:cursor-pointer p-1"
			>
				COPY
				<IconContext.Provider value={{ size: "16", color: "green" }}>
					{isCopied ? <PiCheck /> : <PiCopy />}
				</IconContext.Provider>
			</p>
			<pre className="text-xs p-2 mt-6">{json}</pre>
		</div>
	);
}
