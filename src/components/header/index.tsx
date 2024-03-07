import { DroppedSkins } from "./droppedSkins";
import { EventLogo } from "./eventLogo";
import { HeaderInfo } from "./info";
import { MainHeader } from "./mainHeader";
import { Nav } from "./nav";
import { TopHeader } from "./topHeader";
import { BgSvg } from "./topHeader/bgSvg";

export function Header() {
	return (
		<header className="flex flex-col">
			<BgSvg />
			<TopHeader />
			<MainHeader />
			<HeaderInfo />
			<DroppedSkins />
			<Nav />
			<EventLogo />
		</header>
	);
}
