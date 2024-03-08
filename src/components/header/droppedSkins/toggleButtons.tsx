import { IconContext } from "react-icons";
import { ToggleDropsButton } from "./toggleDropsButton";
import { PiCrownSimple, PiPackage } from "react-icons/pi";
import "./liveDrop.css";
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
	return (
		<div className="flex flex-col items-center bg-slate-800 min-w-[148px]">
			<ToggleDropsButton
				className={`${shouldShowBestDrops ? "" : "toggleButtonActive"}`}
				disabled={isToggleDisabled}
				onClick={toggleBestDropsFalse}
				icon={
					<IconContext.Provider value={{ size: "32" }}>
						<PiPackage />
					</IconContext.Provider>
				}
			>
				All Drops
			</ToggleDropsButton>
			<ToggleDropsButton
				className={` ${shouldShowBestDrops ? "toggleButtonActive" : ""}`}
				disabled={isToggleDisabled}
				onClick={toggleBestDropsTrue}
				icon={
					<IconContext.Provider value={{ size: "32" }}>
						<PiCrownSimple />
					</IconContext.Provider>
				}
			>
				Best Drops
			</ToggleDropsButton>
		</div>
	);
}
