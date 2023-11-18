import { DroppedSkins } from "./droppedSkins";
import { HeaderInfo } from "./info";
import { MainHeader } from "./mainHeader";
import { Nav } from "./nav";
import { TopHeader } from "./topHeader";

export function Header() {
	return (
		<header className="flex flex-col gap-4">
			<TopHeader />
			<MainHeader />
			<HeaderInfo />
			<DroppedSkins />
			<Nav />
		</header>
	);
}
