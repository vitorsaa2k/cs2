import { useQuery } from "@tanstack/react-query";
import { CrateType } from "../../features/crate/types/api";
import { getCrateById } from "../../services/crateApi";

export function useGetCrateById(crateId: string) {
	const query = useQuery<CrateType>({
		queryKey: ["crate"],
		queryFn: () => getCrateById(crateId),
	});
	return query;
}
