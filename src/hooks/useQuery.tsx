import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/userApi";
import { UserType } from "../types/api";

export function useGetUser() {
	const query = useQuery<UserType>({
		queryKey: ["user"],
		queryFn: getUser,
	});
	return query;
}
