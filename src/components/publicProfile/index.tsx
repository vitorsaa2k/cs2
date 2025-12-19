import { useParams } from "react-router-dom";
import { UserInfo } from "../profile/userInfo";
import { UserInventory } from "./userInventory";
import { useGetUserById } from "@/hooks/useQuery/user";
import { Suspense } from "react";

export function FullPublicProfile() {
	const { id } = useParams();
	const { data: user, isLoading } = useGetUserById(id ?? "");
	return (
		<Suspense fallback={<Fallback />}>
			{isLoading || !user ? null : (
				<div className="flex flex-col items-center justify-center px-16 py-3">
					<UserInfo isPublic user={user} />
					<UserInventory />
				</div>
			)}
		</Suspense>
	);
}

function Fallback() {
	return <p>Loading...</p>;
}
