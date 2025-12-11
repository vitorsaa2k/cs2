import { useQuery } from "@tanstack/react-query";
import { getUserInventoryByPage } from "../../services/userApi";
import { InventoryType } from "../../types/api";

export interface Pagination {
	pagination: {
		page: number;
		itemsPerPage: number;
		totalItems: number;
		maxPages: number;
	};
}

export function useGetInventoryByPage(page: number) {
	const query = useQuery<InventoryType & Pagination>({
		queryKey: ["inventory", page],
		queryFn: () => getUserInventoryByPage(page),
	});
	return query;
}
