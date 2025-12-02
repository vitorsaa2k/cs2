import { AvaliableSkinsFilter } from "./filter";

export function AvaliableSkinsHeader() {
	return (
		<div className="flex justify-between items-center gap-2">
			<p>Upgrade</p>
			<AvaliableSkinsFilter />
		</div>
	);
}
