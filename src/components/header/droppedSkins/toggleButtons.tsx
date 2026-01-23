import { IconContext } from "react-icons";
import { ToggleDropsButton } from "./toggleDropsButton";
import { PiCrownSimple, PiPackage } from "react-icons/pi";
import "./liveDrop.css";
import { cn } from "@/libs/utils";
interface ToggleButtonsProps {
	shouldShowBestDrops: boolean;
	isToggleDisabled: boolean;
	toggleBestDropsFalse: () => void;
	toggleBestDropsTrue: () => void;
}
export function ToggleButtons({
	isToggleDisabled,
	shouldShowBestDrops,
	toggleBestDropsFalse,
	toggleBestDropsTrue,
}: ToggleButtonsProps) {
	const screenWidth = window.screen.width;

	return (
		<div
			className={`flex flex-col items-center bg-slate-800 ${
				screenWidth > 640 ? "min-w-[148px]" : "min-w-[64px]"
			}`}
		>
			<ToggleDropsButton
				className={cn({ toggleButtonActive: !shouldShowBestDrops })}
				disabled={isToggleDisabled}
				onClick={toggleBestDropsFalse}
				icon={
					<IconContext.Provider value={{ size: "32" }}>
						<PiPackage />
					</IconContext.Provider>
				}
			>
				{screenWidth > 640 && "All Drops"}
			</ToggleDropsButton>
			<ToggleDropsButton
				className={cn({ toggleButtonActive: shouldShowBestDrops })}
				disabled={isToggleDisabled}
				onClick={toggleBestDropsTrue}
				icon={
					<IconContext.Provider value={{ size: "32" }}>
						<PiCrownSimple />
					</IconContext.Provider>
				}
			>
				{screenWidth > 640 && "Best Drops"}
			</ToggleDropsButton>
		</div>
	);
}
