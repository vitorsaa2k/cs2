import { useQuery } from "@tanstack/react-query";
import {
	PublicSeed,
	Seed,
	SeedPaginated,
} from "../../features/provablyFair/types/api";
import {
	getServerSeedHistory,
	getServerSeedHistoryPaginated,
	getUserPublicSeeds,
} from "../../services/userApi";

export function useGetServerSeeds() {
	const query = useQuery<Seed[]>({
		queryKey: ["serverSeeds"],
		queryFn: getServerSeedHistory,
	});
	return query;
}

export function useGetServerSeedsPaginated(page: number) {
	const query = useQuery<SeedPaginated>({
		queryKey: ["serverSeeds", page],
		queryFn: () => getServerSeedHistoryPaginated(page),
	});
	return query;
}

export function useGetUserPublicSeeds() {
	const query = useQuery<PublicSeed>({
		queryKey: ["publicSeeds"],
		queryFn: getUserPublicSeeds,
	});
	return query;
}
