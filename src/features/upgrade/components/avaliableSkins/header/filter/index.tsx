import { MaxPriceInput } from "./maxPrice";
import { RaritySelector } from "./raritySelector";
import { SearchByNameInput } from "./searchName";
import { ShowOnlySelectedButton } from "./selected";
import { AvaliableSkinsSortButton } from "./sortButton";

export function AvaliableSkinsFilter() {
	return (
		<div className="flex flex-wrap gap-2 items-center justify-end">
			<ShowOnlySelectedButton />
			<SearchByNameInput />
			<MaxPriceInput />
			<AvaliableSkinsSortButton />
			<RaritySelector />
		</div>
	);
}
