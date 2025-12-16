import { UserType } from "../../../types/api";
import { URL } from "../../../libs/axios";
import { queryClient } from "../../../libs/queryClient";
import { IconContext } from "react-icons";
import { PiSignOut } from "react-icons/pi";

export function UserHeader({ user }: { user: UserType }) {
	async function LogOut() {
		window.location.href = `${URL}/auth/logout`;
		queryClient.resetQueries({ queryKey: ["user"] });
		queryClient.removeQueries({ queryKey: ["user"] });
	}
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="flex gap-3">
				<a href="/profile" className="flex items-center gap-3">
					<img className="rounded-full max-w-[40px]" src={user.photo} />
					{user.displayName}
				</a>
				<button
					aria-label="logout"
					className="bg-slate-900 p-1 rounded"
					onClick={LogOut}
				>
					<IconContext.Provider value={{ size: "24" }}>
						<PiSignOut />
					</IconContext.Provider>
				</button>
			</div>
		</div>
	);
}
