import { useQuery } from "@tanstack/react-query";
import {
	getUserInventory,
	getUserInventoryById,
	getUserInventoryByIdPaginated,
	getUserInventoryByPage,
} from "../../services/userApi";
import { InventoryType } from "../../types/api";
import { SortOptions } from "../../features/upgrade/contextTypes";

export interface Pagination {
	pagination: {
		page: number;
		itemsPerPage: number;
		totalItems: number;
		maxPages: number;
	};
}

export function useGetInventoryByPage(
	page: number,
	filter: { sort: SortOptions }
) {
	const query = useQuery<InventoryType & Pagination & { totalPrice: number }>({
		queryKey: ["inventory", page, filter.sort],
		queryFn: () => getUserInventoryByPage(page, filter),
	});
	return query;
}

export function useGetLoggedUserInventory() {
	const query = useQuery<InventoryType>({
		queryKey: ["inventory"],
		queryFn: getUserInventory,
	});
	return query;
}

export function useGetUserInventoryById(userId: string) {
	const query = useQuery<InventoryType>({
		queryKey: ["publicInventory"],
		queryFn: () => getUserInventoryById(userId),
	});
	return query;
}

export function useGetUserInventoryByIdPaginated(userId: string, page: number) {
	const query = useQuery<InventoryType & Pagination>({
		queryKey: ["publicInventory", page, userId],
		queryFn: () => getUserInventoryByIdPaginated(userId, page),
	});
	return query;
}
