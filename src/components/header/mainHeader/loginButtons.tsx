import { URL } from "../../../libs/axios";
import { GoogleLogo } from "./logos/googleLogo";
import { SteamLogo } from "./logos/steamLogo";

export function LoginButtons() {
	return (
		<div className="flex">
			<a
				className="mr-2 text-base bg-slate-900 px-4 py-2 rounded flex gap-2"
				href={`${URL}/auth/steam`}
			>
				<SteamLogo />
			</a>
			<a
				className="mr-2 text-base bg-slate-900 px-4 py-2 rounded flex gap-2"
				href={`${URL}/auth/google`}
			>
				<GoogleLogo />
			</a>
		</div>
	);
}
