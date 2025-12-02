import { ComponentProps, Dispatch, SetStateAction } from "react";
import { RarityNames } from "../../../../../contextTypes";
import { cn } from "../../../../../../../libs/utils";

interface RaritySelectorProps extends ComponentProps<"button"> {
	currentRarity: RarityNames | false;
	rarity: RarityNames | "All";
	setSelectedRarity: Dispatch<SetStateAction<RarityNames | false>>;
	setShouldShow: Dispatch<SetStateAction<boolean>>;
}

export function RaritySelectorItem({
	currentRarity,
	rarity,
	setSelectedRarity,
	setShouldShow,
	...props
}: RaritySelectorProps) {
	return (
		<button
			{...props}
			onClick={() => {
				setSelectedRarity(rarity === "All" ? false : rarity);
				setShouldShow(false);
			}}
			className={cn(
				"border-l-2 p-2 w-full text-start whitespace-nowrap hover:bg-slate-600",
				props.className,
				{
					"bg-slate-600":
						currentRarity === rarity ||
						(rarity === "All" && currentRarity === false),
				}
			)}
		>
			{props.children}
		</button>
	);
}
