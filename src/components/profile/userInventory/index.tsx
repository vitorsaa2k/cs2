import { useEffect, useState } from "react";
import { getUserInventory } from "../../../services/userApi";
import { SkinType } from "../../../features/crate/types/api";
import { InventoryItem } from "./inventoryItem";

export function UserInventory() {
	const [inventory, setInventory] = useState<SkinType[]>([]);

	useEffect(() => {
		getUserInventory().then(res =>
			res.inventory ? setInventory(res.inventory) : null
		);
	}, []);
	return (
		<section className="grid xl:grid-cols-6 md:grid-cols-3 lg:grid-cols-4 gap-1 min-[320px]:grid-cols-2 ">
			{inventory.map((item, index) => {
				return (
					<div key={index}>
						<InventoryItem item={item} />
					</div>
				);
			})}
		</section>
	);
}
