import { URL } from "../libs/axios";

export function Home() {
	return (
		<>
			{" "}
			<a href={`${URL}/auth/steam`}>Log In with Steam</a>
		</>
	);
}
