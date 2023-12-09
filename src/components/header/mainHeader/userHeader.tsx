import { UserType } from "../../../types/api";
import { URL } from "../../../libs/axios";
import { queryClient } from "../../../libs/queryClient";

export function UserHeader({ user }: { user: UserType }) {
	async function LogOut() {
		queryClient.resetQueries({ queryKey: ["user"] });
		window.location.href = `${URL}/auth/logout`;
	}
	return (
		<div className="flex flex-col items-center justify-center">
			<a href="/profile" className="flex items-center gap-2">
				<img className="rounded-full max-w-[40px]" src={user.photos[0].value} />
				{user.displayName}
			</a>
			<p>Balance: ${user.balance}</p>
			<div className="m-2">
				<button className="bg-red-900 rounded p-1" onClick={LogOut}>
					Log Out
				</button>
			</div>
		</div>
	);
}
