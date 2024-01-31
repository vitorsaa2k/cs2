import { DrawnSkin } from "../../../features/crate/types/api";
import { useGetUserInventoryById } from "../../../hooks/useQuery/inventory";
import { InventoryItem } from "../../profile/userInventory/inventoryItem";
import { useParams } from "react-router-dom";

export function UserInventory() {
	const { id } = useParams();
	const { data: inventory } = useGetUserInventoryById(id ?? "");
	const bestSkin = inventory?.inventory
		.sort((a: DrawnSkin, b: DrawnSkin) => a.price - b.price)
		.reverse()[0];

	return (
		<div>
			<div className="flex justify-end">
				{bestSkin ? <InventoryItem isPublic item={bestSkin} /> : null}
			</div>
			<p className="text-xl border-b m-4">Inventory</p>
			<section className="grid xl:grid-cols-6 md:grid-cols-3 lg:grid-cols-4 gap-1 min-[320px]:grid-cols-2 ">
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
