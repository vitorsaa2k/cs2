import { SkinType } from "@/features/crate/types/api";
import { parseItemNameExterior } from "@/utils/crate/parseItemName";
import { HTMLAttributes, useMemo } from "react";

interface SkinExteriorProps extends HTMLAttributes<HTMLParagraphElement> {
	skin: SkinType;
}

export function SkinExterior({ skin, ...props }: SkinExteriorProps) {
	const parsedSkin = parseItemNameExterior(skin.name);
	const skinName = useMemo(() => {
		switch (parsedSkin.exterior) {
			case "Factory New":
				return "FN";
			case "Minimal Wear":
				return "MW";
			case "Field-Tested":
				return "FT";
			case "Well Worn":
				return "WW";
			case "Battle-Scarred":
				return "BS";
			default:
				return "FN";
		}
	}, [parsedSkin.exterior]);
	return (
		<p
			{...props}
			className={`${parsedSkin.isStatTrak ? "text-orange-500" : ""} ${
				props.className
			}`}
		>
			{skinName}
		</p>
	);
}
