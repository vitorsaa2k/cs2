import { FacebookIcon } from "./facebookIcon";
import { InstagramIcon } from "./instagramIcon";
import { TwitterIcon } from "./twitterIcon";
import { YoutubeIcon } from "./youtubeIcon";

export function Socials() {
	return (
		<div className="flex gap-2 justify-end w-full">
			<InstagramIcon />
			<FacebookIcon />
			<YoutubeIcon />
			<TwitterIcon />
		</div>
	);
}
