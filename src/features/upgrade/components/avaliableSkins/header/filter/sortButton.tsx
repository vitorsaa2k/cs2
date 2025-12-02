import { useState } from "react";

export function AvaliableSkinsSortButton() {
	const [sort, setSort] = useState<"asc" | "des">("des");
	return (
		<button
			onClick={() => setSort(sort === "asc" ? "des" : "asc")}
			className="bg-slate-900 p-2 rounded hover:cursor-pointer"
		>
			Price {sort === "des" ? <>&#8595;</> : <>&uarr;</>}
		</button>
	);
}
