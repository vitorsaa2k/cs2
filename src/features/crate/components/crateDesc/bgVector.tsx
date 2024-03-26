import { useMemo } from "react";
import { SkinType } from "../../types/api";

export function BgVector({ item }: { item: SkinType }) {
	const strokeColor = useMemo(() => {
		switch (item.rarity_color) {
			case "5e98d9":
				return "4482FF";
			case "8847ff":
				return "A41AFF";
			case "eb4b4b":
				return "FF445D";
			case "d32ce6":
				return "DF5DEE";
			case "e4ae39":
				return "DCAE64";
			default:
				return "4482FF";
		}
	}, [item.rarity_color]);
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
