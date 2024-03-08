import { DroppedSkins } from "./droppedSkins";
import { EventLogo } from "./eventLogo";
import { MainHeader } from "./mainHeader";
import { TopHeader } from "./topHeader";

export function Header() {
	return (
		<header className="flex flex-col">
			<TopHeader />
			<MainHeader />
			<DroppedSkins />
			<EventLogo />
		</header>
	);
}
