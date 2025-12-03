import { useQuery } from "@tanstack/react-query";
import {
	getUserInventory,
	getUserInventoryById,
	getUserInventoryByPage,
} from "../../services/userApi";
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
