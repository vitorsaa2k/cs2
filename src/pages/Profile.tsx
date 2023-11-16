import { useLocation } from "react-router-dom";
import { User } from "../types/api";
import { URL } from "../libs/axios";

export function Profile() {
	const location = useLocation();
	const user: User = location.state.user;

	async function LogOut() {
		window.history.replaceState({}, document.title);
		window.location.replace(`${URL}/auth/logout`);
	}
	return (
		<div>
			<div>Username: {user.displayName}</div>
			<div>Id: {user.id}</div>
			<img src={user.photos[2].value} />
			<button onClick={LogOut}>Log Out</button>
		</div>
	);
}
