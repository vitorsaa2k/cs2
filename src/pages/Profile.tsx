import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

export function Profile() {
	const { user } = useContext(UserContext);
	return (
		<div>
			<div>Username: {user.displayName}</div>
			<div>Id: {user.id}</div>
			<img src={user.photos[2].value} />
		</div>
	);
}
