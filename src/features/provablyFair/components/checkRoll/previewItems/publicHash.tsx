export function PublicHash({ publicHash }: { publicHash: string }) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-[_130px_1fr] gap-2 items-center rounded">
			<p className="bg-slate-700 rounded py-2 px-4">Public Hash</p>
			<div className="border border-zinc-700 py-2 px-4 rounded">
				<p className="break-words">{publicHash}</p>
			</div>
		</div>
	);
}
