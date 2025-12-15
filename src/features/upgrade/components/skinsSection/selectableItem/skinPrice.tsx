import { SkinType } from "@/features/crate/types/api";
import { formatPrice } from "@/utils/formatPrice";
import { HTMLAttributes } from "react";

interface SkinPriceProps extends HTMLAttributes<HTMLParagraphElement> {
	skin: SkinType;
}

export function SkinPrice({ skin, ...props }: SkinPriceProps) {
	const price = formatPrice(skin.price);

	return <p {...props}>{price}</p>;
}
