import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/userContext";
import { getUserInventory } from "../../../services/userApi";
import { SkinType } from "../../../features/crate/types/api";
import { InventoryItem } from "./inventoryItem";

export function UserInventory() {
	const [inventory, setInventory] = useState<SkinType[]>([]);

	const { user } = useContext(UserContext);
	useEffect(() => {
		getUserInventory(user.id).then(res =>
			res.inventory ? setInventory(res.inventory) : null
		);
	}),
		[user];
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
