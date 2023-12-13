import { Seed } from "../../../types/api";

export function SeedItem({ seed }: { seed: Seed }) {
	return (
		<div className="rounded text-sm flex flex-col gap-[1px] ">
			<div className="items-center grid grid-cols-[_minmax(0,0.2fr)_minmax(0,1fr)]">
				<p className="bg-zinc-900 px-1 py-2 rounded-ss">Server Seed</p>
				<p className="bg-zinc-800 rounded-se px-1 py-2">{seed.serverSeed}</p>
			</div>
			<div className="grid grid-cols-[_minmax(0,0.2fr)_minmax(0,1fr)] items-center">
				<p className="bg-zinc-900 px-1 py-2">Secret Salt</p>
				<p className="bg-zinc-800 px-1 py-2">{seed.secretSalt}</p>
			</div>
			<div className="grid grid-cols-[_minmax(0,0.2fr)_minmax(0,1fr)]">
				<p className="bg-zinc-900 px-1 py-2">Public Hash</p>
				<p className="bg-zinc-800  px-1 py-2 break-words">{seed.publicHash}</p>
			</div>
			<div className="grid grid-cols-[_minmax(0,0.2fr)_minmax(0,1fr)]">
				<p className="bg-zinc-900 px-1 py-2">Nonce</p>
				<p className="bg-zinc-800 px-1 py-2">{seed.nonce}</p>
			</div>
			<div className="grid grid-cols-[_minmax(0,0.2fr)_minmax(0,1fr)]">
				<p className="bg-zinc-900 px-1 py-2 rounded-es">Date Range</p>
				<p className="bg-zinc-800 rounded-ee px-1 py-2">{seed.dateRange}</p>
			</div>
		</div>
	);
}
