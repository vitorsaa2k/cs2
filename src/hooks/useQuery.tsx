import { useQuery } from "@tanstack/react-query";
import {
	getServerSeedHistory,
	getUser,
	getUserById,
	getUserPublicSeeds,
} from "../services/userApi";
import { Section, UserType } from "../types/api";
import { PublicSeed, Seed } from "../features/provablyFair/types/api";
import { getCrateById } from "../services/crateApi";
import { CrateType } from "../features/crate/types/api";
import { getAllSections } from "../services/sectionsApi";

export function useGetLoggedUser() {
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

export function useGetUserPublicSeeds() {
	const query = useQuery<PublicSeed>({
		queryKey: ["publicSeeds"],
		queryFn: getUserPublicSeeds,
	});
	return query;
}

export function useGetCrateById(crateId: string) {
	const query = useQuery<CrateType>({
		queryKey: ["crate"],
		queryFn: () => getCrateById(crateId),
	});
	return query;
}

export function useGetUserById(userId: string) {
	const query = useQuery<UserType>({
		queryKey: ["publicUser"],
		queryFn: () => getUserById(userId),
	});
	return query;
}

export function useGetAllSections() {
	const query = useQuery<Section[]>({
		queryKey: ["publicUser"],
		queryFn: () => getAllSections(),
		retry: true,
	});
	return query;
}
