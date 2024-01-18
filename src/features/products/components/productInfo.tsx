import { ProductImage } from "./productImage";
import { ProductName } from "./productName";
import { ProductPrice } from "./productPrice";

export function ProductInfo({
	crateId,
	name,
	price,
	src,
}: {
	crateId: string;
	name: string;
	price: number;
	src: string;
}) {
	return (
		<div>
			<ProductImage crateId={crateId} name={name} src={src} />
			<ProductName crateId={crateId} name={name} />
			<ProductPrice price={price} />
		</div>
	);
}
