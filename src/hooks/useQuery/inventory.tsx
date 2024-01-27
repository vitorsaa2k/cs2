import { useQuery } from "@tanstack/react-query";
import { getUserInventoryByPage } from "../../services/userApi";
import { InventoryType } from "../../types/api";

export function useGetInventoryByPage(page: number) {
	const query = useQuery<InventoryType>({
		queryKey: ["inventory", page],
		queryFn: () => getUserInventoryByPage(page),
	});
	return query;
}
