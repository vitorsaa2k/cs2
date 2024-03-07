import { FacebookIcon } from "./facebookIcon";
import { InstagramIcon } from "./instagramIcon";
import { Logo } from "./logo";
import { TwitterIcon } from "./twitterIcon";
import { YoutubeIcon } from "./youtubeIcon";

export function TopHeader() {
	return (
		<div className="hidden md:flex justify-end gap-3 items-center bg-slate-950 h-[38px]">
			<Logo />
			<InstagramIcon />
			<FacebookIcon />
			<YoutubeIcon />
			<TwitterIcon />
		</div>
	);
}
