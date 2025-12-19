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
		<section className="flex items-center">
			<UserImage src={user.photo} />
			<div className="flex-col p-6 items-start  justify-center -ml-6 -z-10 bg-slate-800 rounded-r-lg">
				<div>
					<p className="text-xl font-bold">{user?.displayName}</p>
					{isPublic ? null : (
						<p className="line-clamp-1">Balance: ${user.balance}</p>
					)}
				</div>
				<div></div>
			</div>
		</section>
	);
}
