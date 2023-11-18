import { FacebookIcon } from "./facebookIcon";
import { InstagramIcon } from "./instagramIcon";
import { TwitterIcon } from "./twitterIcon";
import { YoutubeIcon } from "./youtubeIcon";

export function TopHeader() {
	return (
		<div className="flex justify-end gap-3 items-center">
			<InstagramIcon />
			<FacebookIcon />
			<YoutubeIcon />
			<TwitterIcon />
		</div>
	);
}
