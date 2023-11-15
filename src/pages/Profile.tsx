import { useLocation } from "react-router-dom";
import { User } from "../types/api";

export function Profile() {
	const location = useLocation();
	const user: User = location.state.user;
	return (
		<div>
			<div>Username: {user.displayName}</div>
			<div>Id: {user.id}</div>
			<img src={user.photos[2].value} />
		</div>
	);
}
