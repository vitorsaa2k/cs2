import { ComponentProps } from "react";
import { RarityNames } from "@/features/upgrade/contextTypes";
import { cn } from "@/libs/utils";

interface RaritySelectorProps extends ComponentProps<"button"> {
	currentRarity: RarityNames | false;
	rarity: RarityNames | "All";
	handleRaritySelection: (rarity: RarityNames | false) => void;
}

export function RaritySelectorItem({
	currentRarity,
	rarity,
	handleRaritySelection,
	...props
}: RaritySelectorProps) {
	return (
		<button
			{...props}
			onClick={() => {
				handleRaritySelection(rarity === "All" ? false : rarity);
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
