import { SkinType } from "../features/crate/types/api";
import { AvaliableSkinsFilter } from "../features/upgrade/contextTypes";
import { Pagination } from "../hooks/useQuery/inventory";
import { instance } from "../libs/axios";

export async function getSkinByRange(filter: AvaliableSkinsFilter) {
	const maxPrice = filter.name.length > 0 ? 0 : filter.maxPrice;
	if (filter.name.length > 0) {
		filter.rarity = false;
	}
	const searchParams = new URLSearchParams({
		page: `${filter.page}`,
		sort: filter.sort,
		name: filter.name,
		maxPrice: maxPrice.toString(),
		rarity: filter.rarity ? filter.rarity : "",
	});
	return (
		await instance.get<Promise<{ skins: SkinType[] } & Pagination>>(
			`/skin/range?${searchParams}`
		)
	).data;
}
