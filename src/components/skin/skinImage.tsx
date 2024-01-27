import { HTMLAttributes } from "react";
import { SkinType } from "../../features/crate/types/api";

interface SkinImageProps extends HTMLAttributes<HTMLImageElement> {
	skin: SkinType;
}

export function SkinImage(props: SkinImageProps) {
	return (
		<img
			{...props}
			src={`https://steamcommunity-a.akamaihd.net/economy/image/${props.skin.icon_url}`}
		/>
	);
}
