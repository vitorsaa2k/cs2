import { ProductImage } from "./productImage";
import { ProductName } from "./productName";
import { ProductPrice } from "./productPrice";

export function ProductInfo({
	name,
	price,
	src,
}: {
	name: string;
	price: number;
	src: string;
}) {
	return (
		<div>
			<ProductImage name={name} src={src} />
			<ProductName name={name} />
			<ProductPrice price={price} />
		</div>
	);
}
