import { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";
import { UserImage } from "./userImage";

export function UserInfo() {
	const { user } = useContext(UserContext);
	return (
		<section className="border m-6 flex">
			<UserImage src={user.photos[2].value} />
			<div className="flex items-center">
				<div>Username: {user.displayName}</div>
			</div>
		</section>
	);
}
