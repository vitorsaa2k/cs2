import { useMemo } from "react";
import { SkinType } from "../../types/api";

export function BgVector({ item }: { item: SkinType }) {
	const strokeColor = useMemo(() => {
		if (item.category.name === "Knives") return "DCAE64";
		switch (item.rarity.name) {
			case "Mil-Spec Grade":
				return "4482FF";
			case "Restricted":
				return "A41AFF";
			case "Covert":
				return "FF445D";
			case "Classified":
				return "DF5DEE";
			case "Extraordinary":
				return "DCAE64";
			default:
				return "4482FF";
		}
	}, [item.category.name, item.rarity.name]);
	return (
		<svg
			className="absolute z-[0] group-hover:scale-125 transition-all"
			width="66"
			height="78"
			viewBox="0 0 66 78"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1 23.0006L30.7366 2.55794C32.1017 1.61951 33.904 1.61958 35.2689 2.55813L65 23.0006"
				stroke={`#${strokeColor}`}
				strokeWidth="2"
			/>
			<path
				d="M65 55.0006L35.2634 75.4433C33.8983 76.3817 32.096 76.3816 30.7311 75.4431L1 55.0006"
				stroke={`#${strokeColor}`}
				strokeWidth="2"
			/>
		</svg>
	);
}
