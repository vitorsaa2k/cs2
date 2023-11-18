import { HeaderInfo } from "./info";
import { MainHeader } from "./mainHeader";
import { TopHeader } from "./topHeader";

export function Header() {
	return (
		<header className="flex flex-col gap-4">
			<TopHeader />
			<MainHeader />
			<HeaderInfo />
		</header>
	);
}
