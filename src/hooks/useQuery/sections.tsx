import { useQuery } from "@tanstack/react-query";
import { Section } from "../../types/api";
import { getAllSections } from "../../services/sectionsApi";

export function useGetAllSections() {
	const query = useQuery<Section[]>({
		queryKey: ["publicUser"],
		queryFn: () => getAllSections(),
		retry: true,
	});
	return query;
}
