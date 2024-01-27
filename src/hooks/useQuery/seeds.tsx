import { useQuery } from "@tanstack/react-query";
import { PublicSeed, Seed } from "../../features/provablyFair/types/api";
import {
	getServerSeedHistory,
	getUserPublicSeeds,
} from "../../services/userApi";

export function useGetServerSeeds() {
	const query = useQuery<Seed[]>({
		queryKey: ["serverSeeds"],
		queryFn: getServerSeedHistory,
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
