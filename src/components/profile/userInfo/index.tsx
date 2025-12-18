import { UserImage } from "./userImage";
import { UserType } from "@/types/api";

export function UserInfo({
	user,
	isPublic,
}: {
	user: UserType;
	isPublic: boolean;
}) {
	return (
		<section className="border min-w-[840px] p-12 rounded m-6 flex">
			{user ? (
				<>
					<UserImage src={user.photo} />
					<div className="flex w-full border p-2 m-4 rounded flex-col items-start">
						<div>
							<p className="text-xl">{user?.displayName}</p>
							{isPublic ? null : <p>${user.balance}</p>}
						</div>
						<div></div>
					</div>
				</>
			) : null}
		</section>
	);
}
