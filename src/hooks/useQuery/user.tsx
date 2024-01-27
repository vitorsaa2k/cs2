import { useQuery } from "@tanstack/react-query";
import { UserType } from "../../types/api";
import { getUser, getUserById } from "../../services/userApi";

export function useGetLoggedUser() {
	const query = useQuery<UserType>({
		queryKey: ["user"],
		queryFn: getUser,
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
