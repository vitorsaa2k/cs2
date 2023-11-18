import { Logo } from "./logo";
import { LoginButton } from "./loginButton";

export function MainHeader() {
	return (
		<div className="flex justify-between mx-5">
			<Logo />
			<LoginButton />
		</div>
	);
}
