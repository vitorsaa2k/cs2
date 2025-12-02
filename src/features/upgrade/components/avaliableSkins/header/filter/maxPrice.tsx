export function MaxPriceInput() {
	return (
		<label className="flex items-center gap-1 bg-slate-900 py-2 pl-3 pr-6 rounded">
			<input
				placeholder="$ <"
				className="bg-transparent p-0 border-none shadow-none focus:outline-none max-w-[64px]"
			/>
		</label>
	);
}
