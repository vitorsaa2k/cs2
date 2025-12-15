export function Page({ page, maxPages }: { page: number; maxPages: number }) {
	return (
		<p className="bg-slate-800 p-2 rounded-lg">
			{page}/{maxPages}
		</p>
	);
}
