import { URL } from "../../../libs/axios";

export function LoginButton() {
	return <a href={`${URL}/auth/steam`}>Log In</a>;
}
