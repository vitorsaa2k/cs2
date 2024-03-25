import { URL } from "../../../libs/axios";
import { SteamLogo } from "./steamLogo";

export function LoginButton() {
	return (
		<a
			className="mr-2 text-base bg-slate-900 px-4 py-2 rounded flex gap-2"
			href={`${URL}/auth/steam`}
		>
			Login
			<SteamLogo />
		</a>
	);
}
