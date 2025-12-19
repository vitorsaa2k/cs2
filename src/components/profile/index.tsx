import { UserInfo } from "./userInfo";
import { UserInventory } from "./userInventory";
import { useGetLoggedUser } from "@/hooks/useQuery/user";
import { Suspense } from "react";

export function FullProfile() {
	const { data: user, isLoading } = useGetLoggedUser();
	return (
		<Suspense fallback={<Fallback />}>
			{isLoading || !user ? null : (
				<div className="flex flex-col items-center justify-center px-16 py-3">
					<UserInfo isPublic={false} user={user} />
					<UserInventory />
				</div>
			)}
		</Suspense>
	);
}

function Fallback() {
	return <p>Loading...</p>;
}
