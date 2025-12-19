import { DrawnSkin } from "../../../features/crate/types/api";
import { useGetUserInventoryById } from "../../../hooks/useQuery/inventory";
import { InventoryItem } from "../../profile/userInventory/inventoryItem";
import { useParams } from "react-router-dom";

export function UserInventory() {
	const { id } = useParams();
	const { data: inventory } = useGetUserInventoryById(id ?? "");
	const bestSkin = inventory?.inventory.sort(
		(a: DrawnSkin, b: DrawnSkin) => b.price - a.price
	)[0];

	return (
		<div className="w-full">
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
		</div>
	);
}
