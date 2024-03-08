import { Metrics } from "./metrics";
import { Logo } from "./logo";
import { Socials } from "./socials";
import { BgSvg } from "./bgSvg";

export function TopHeader() {
	return (
		<>
			<div className="hidden md:flex gap-3 z-20 items-center bg-slate-950 h-[38px]">
				<Logo />
				<Metrics />
				<Socials />
			</div>
			<BgSvg />
		</>
	);
}
