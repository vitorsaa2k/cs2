import { MaxPriceInput } from "./maxPrice";
import { RaritySelector } from "./raritySelector";
import { SearchByNameInput } from "./searchName";
import { ShowOnlySelectedButton } from "./selected";
import { AvaliableSkinsSortButton } from "./sortButton";

export function AvaliableSkinsFilter() {
	return (
		<>
			<div className="flex flex-wrap gap-2 items-center justify-end max-md:hidden">
				<ShowOnlySelectedButton />
				<SearchByNameInput />
				<MaxPriceInput />
				<AvaliableSkinsSortButton />
				<RaritySelector />
			</div>
			<div className="flex flex-wrap gap-2 items-center justify-end w-full flex-col md:hidden">
				<SearchByNameInput />
				<div className="flex flex-wrap gap-2 items-center justify-end">
					<ShowOnlySelectedButton />
					<MaxPriceInput />
					<AvaliableSkinsSortButton />
					<RaritySelector />
				</div>
			</div>
		</>
	);
}
