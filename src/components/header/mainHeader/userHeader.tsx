import { UserType } from "../../../types/api";
import { URL } from "../../../libs/axios";

export function UserHeader({ user }: { user: UserType }) {
	async function LogOut() {
		window.history.replaceState({}, document.title);
		window.location.replace(`${URL}/auth/logout`);
		localStorage.removeItem("user");
	}
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="flex items-center gap-2">
				<img className="rounded-full max-w-[40px]" src={user.photos[0].value} />
				{user.displayName}
			</div>
			<div className="m-2">
				<button className="bg-red-900 rounded p-1" onClick={LogOut}>
					Log Out
				</button>
			</div>
		</div>
	);
}
