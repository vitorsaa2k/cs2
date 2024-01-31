import { HTMLAttributes } from "react";
import { SkinType } from "../../../crate/types/api";
import { formatPrice } from "../../../../utils/formatPrice";

interface SkinPriceProps extends HTMLAttributes<HTMLParagraphElement> {
	skin: SkinType;
}

export function SkinPrice(props: SkinPriceProps) {
	const price = formatPrice(props.skin.price);

	return <p {...props}>{price}</p>;
}
