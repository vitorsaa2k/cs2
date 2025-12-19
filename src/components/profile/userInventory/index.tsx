import { sellAllUserSkins } from "../../../services/userApi";
import { InventoryItem } from "./inventoryItem";
import { queryClient } from "../../../libs/queryClient";
import {
	Pagination,
	useGetInventoryByPage,
} from "../../../hooks/useQuery/inventory";
import { TailSpinner } from "../../spinner";
import { useMutation } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PageSelectorProfile } from "../pageSelector";
import { InventoryType } from "@/types/api";

export function UserInventory() {
	const [searchParams] = useSearchParams();
	const page = searchParams.get("page") ?? "1";
	const queryKey = ["inventory", Number(page), "DESC"];
	const { data: inventory } = useGetInventoryByPage(Number(page), {
		sort: "DESC",
	});
	const sellAllSkins = useMutation({
		mutationFn: sellAllUserSkins,
		onMutate: async () => {
			await queryClient.cancelQueries({
				queryKey,
			});

			const previousInventory = queryClient.getQueryData<
				InventoryType & Pagination & { totalPrice: number }
			>(queryKey);

			if (previousInventory) {
				queryClient.setQueryData(queryKey, {
					id: previousInventory.id,
					inventory: [],
					pagination: { page: 1, itemsPerPage: 7, totalItems: 0, maxPages: 1 },
					totalPrice: 0,
				});
			}
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["inventory"] });
			queryClient.invalidateQueries({ queryKey: ["user"] });
		},
	});

	return (
		<div className="w-full flex flex-col gap-2 items-start">
			<button
				disabled={sellAllSkins.isPending || inventory?.totalPrice === 0}
				onClick={() => sellAllSkins.mutate()}
				className="bg-red-600 p-2 rounded font-bold"
			>
				{sellAllSkins.isPending ? (
					<TailSpinner height={30} width={30} visible />
				) : (
					`Sell all skins $${inventory?.totalPrice ?? 0}`
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
			{inventory && <PageSelectorProfile inventory={inventory} />}
		</div>
	);
}
