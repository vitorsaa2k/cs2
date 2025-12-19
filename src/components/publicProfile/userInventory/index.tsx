import { PageSelectorProfile } from "@/components/profile/pageSelector";
import { DrawnSkin } from "../../../features/crate/types/api";
import { useGetUserInventoryByIdPaginated } from "../../../hooks/useQuery/inventory";
import { InventoryItem } from "../../profile/userInventory/inventoryItem";
import { useParams, useSearchParams } from "react-router-dom";

export function UserInventory() {
	const { id } = useParams();
	const [searchParams] = useSearchParams();
	const page = Number(searchParams.get("page") ?? "1");
	const { data: inventory } = useGetUserInventoryByIdPaginated(id ?? "", page);
	const bestSkin = inventory?.inventory.sort(
		(a: DrawnSkin, b: DrawnSkin) => b.price - a.price
	)[0];

	return (
		<div className="w-full flex flex-col gap-2">
			<div className="flex justify-end">
				{bestSkin ? <InventoryItem isPublic item={bestSkin} /> : null}
			</div>
			<p className="text-xl border-b m-4">Inventory</p>
			<section className="grid-cols-[repeat(auto-fill,minmax(132px,1fr))] grid gap-2 w-full">
				{inventory?.inventory.map((item, index) => {
					return (
						<div key={index}>
							<InventoryItem isPublic item={item} />
						</div>
					);
				})}
			</section>
			{inventory && <PageSelectorProfile inventory={inventory} />}
		</div>
	);
}
