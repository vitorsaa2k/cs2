import { HTMLAttributes } from "react";
import { SkinType } from "../../features/crate/types/api";

interface SkinImageProps extends HTMLAttributes<HTMLImageElement> {
	skin: SkinType;
}

export function SkinImage({ skin, ...props }: SkinImageProps) {
	return (
		<img
			{...props}
			src={`https://steamcommunity-a.akamaihd.net/economy/image/${skin.icon_url}`}
		/>
	);
}
