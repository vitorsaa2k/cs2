import { Logo } from "./logo";
import { LoginButton } from "./loginButton";
import { UserHeader } from "./userHeader";
import { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";

export function MainHeader() {
	const userContext = useContext(UserContext);
	const user = userContext.user;

	return (
		<div className="flex justify-between mx-5">
			<Logo />
			{user.displayName.length > 0 ? (
				<UserHeader user={user} />
			) : (
				<LoginButton />
			)}
		</div>
	);
}
