import { sellAllUserSkins } from "../../../services/userApi";
import { InventoryItem } from "./inventoryItem";
import { queryClient } from "../../../libs/queryClient";
import { useGetLoggedUserInventory } from "../../../hooks/useQuery/inventory";
import { TailSpinner } from "../../spinner";
import { useMutation } from "@tanstack/react-query";

export function UserInventory() {
	const { data: inventory } = useGetLoggedUserInventory();
	const sellAllSkins = useMutation({
		mutationFn: sellAllUserSkins,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["inventory"] });
			queryClient.invalidateQueries({ queryKey: ["user"] });
		},
	});
	const totalToSell =
		Number(
			inventory?.inventory
				.map(item => item.price)
				.reduce((prevValue, currValue) => prevValue + currValue, 0)
				.toFixed(2)
		) || 0;

	return (
		<div className="w-full flex flex-col gap-2 items-start">
			<button
				disabled={sellAllSkins.isPending || totalToSell === 0}
				onClick={() => sellAllSkins.mutate()}
				className="bg-red-600 p-2 rounded font-bold"
			>
				{sellAllSkins.isPending ? (
					<TailSpinner height={30} width={30} visible />
				) : (
					`Sell all skins $${totalToSell}`
				)}
			</button>
			<section className="grid-cols-[repeat(auto-fill,minmax(132px,1fr))] grid gap-2 w-full">
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
