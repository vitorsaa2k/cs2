import { DrawnSkin } from "../../../features/crate/types/api";
import { useGetUserInventoryById } from "../../../hooks/useQuery";
import { BestSkin } from "./bestSkin";
import { InventoryItem } from "./inventoryItem";
import { useParams } from "react-router-dom";

export function UserInventory() {
	const { id } = useParams();
	const { data: inventory } = useGetUserInventoryById(id ?? "");
	const bestSkin = inventory?.inventory
		.sort((a: DrawnSkin, b: DrawnSkin) => a.price - b.price)
		.reverse()[0];

	console.log(bestSkin);

	return (
		<div>
			<div className="flex justify-end">
				{bestSkin ? <BestSkin item={bestSkin} /> : null}
			</div>
			<p className="text-xl border-b m-4">Inventory</p>
			<section className="grid xl:grid-cols-6 md:grid-cols-3 lg:grid-cols-4 gap-1 min-[320px]:grid-cols-2 ">
				{inventory?.inventory.map((item, index) => {
					return (
						<div key={index}>
							<InventoryItem item={item} />
						</div>
					);
				})}
			</section>
		</div>
	);
}
