import { useQuery } from "@tanstack/react-query";
import { getServerSeedHistory, getUser } from "../services/userApi";
import { UserType } from "../types/api";
import { Seed } from "../features/provablyFair/types/api";

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
