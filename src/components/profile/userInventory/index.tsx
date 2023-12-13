import { sellAllUserSkins } from "../../../services/userApi";
import { InventoryItem } from "./inventoryItem";
import { queryClient } from "../../../libs/queryClient";
import { useGetUserInventory } from "../../../hooks/useQuery";
import { TailSpinner } from "../../spinner";
import { useMutation } from "@tanstack/react-query";

export function UserInventory() {
	const { data: inventory } = useGetUserInventory();
	const sellAllSkins = useMutation({
		mutationFn: sellAllUserSkins,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["inventory"] });
			queryClient.invalidateQueries({ queryKey: ["user"] });
		},
	});
	const totalToSell = Number(
		inventory?.inventory
			.map(item => item.price)
			.reduce((prevValue, currValue) => prevValue + currValue, 0)
			.toFixed(2)
	);

	return (
		<div>
			<button
				disabled={sellAllSkins.isPending || totalToSell === 0}
				onClick={() => sellAllSkins.mutate()}
				className="bg-red-800 p-2 rounded m-2"
			>
				{sellAllSkins.isPending ? (
					<TailSpinner height={30} width={30} visible />
				) : (
					`Sell all skins $${totalToSell}`
				)}
			</button>
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
