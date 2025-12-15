import { ComponentProps, useContext } from "react";
import { UpgradeContext } from "../../../contexts/upgradeContext";

interface SectionWrapperProps extends ComponentProps<"div"> {
	shouldBlockInteractionOnSelect?: boolean;
}

export function SectionWrapper({
	shouldBlockInteractionOnSelect,
	...props
}: SectionWrapperProps) {
	const upgradeContext = useContext(UpgradeContext);

	return (
		<div className="relative p-4 md:rounded-lg max-md:rounded-b-lg bg-slate-950 w-full flex flex-col justify-between">
			{props.children}
			{upgradeContext.state.avaliableSkins.isFetching &&
				shouldBlockInteractionOnSelect && (
					<div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 rounded-lg animate-opacity-up bg-black/50 z-10"></div>
				)}
		</div>
	);
}
