import { useQuery } from "@tanstack/react-query";
import {
	getServerSeedHistory,
	getUser,
	getUserInventory,
} from "../services/userApi";
import { InventoryType, UserType } from "../types/api";
import { Seed } from "../features/provablyFair/types/api";
import { getCrate } from "../services/crateApi";
import { CrateType } from "../features/crate/types/api";

export function useGetUser() {
	const query = useQuery<UserType>({
		queryKey: ["user"],
		queryFn: getUser,
	});
	return query;
}

export function useGetServerSeeds() {
	const query = useQuery<Seed[]>({
		queryKey: ["serverSeeds"],
		queryFn: getServerSeedHistory,
	});
	return query;
}

export function useGetCrateByName(name: string) {
	const query = useQuery<CrateType>({
		queryKey: ["crate"],
		queryFn: () => getCrate(name),
	});
	return query;
}

export function useGetUserInventory() {
	const query = useQuery<InventoryType>({
		queryKey: ["inventory"],
		queryFn: getUserInventory,
	});
	return query;
}
