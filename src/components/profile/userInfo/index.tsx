import { UserImage } from "./userImage";
import { useGetLoggedUser } from "../../../hooks/useQuery/user";

export function UserInfo() {
	const { data: user } = useGetLoggedUser();
	return (
		<section className="border min-w-[840px] p-12 rounded m-6 flex">
			{user ? (
				<>
					<UserImage src={user.photos[2].value} />
					<div className="flex w-full border p-2 m-4 rounded flex-col items-start">
						<div>
							<p className="text-xl">{user?.displayName}</p>
							<p>${user.balance}</p>
						</div>
						<div></div>
					</div>
				</>
			) : null}
		</section>
	);
}
