import { useNavigate } from "react-router-dom";
import { ProductImage } from "./productImage";
import { ProductName } from "./productName";
import { ProductPrice } from "./productPrice";

export function ProductInfo({
	name,
	price,
	src,
}: {
	name: string;
	price: string;
	src: string;
}) {
	const navigate = useNavigate();
	function goToCrate() {
		navigate(`/crate/${name}`);
	}
	return (
		<div>
			<ProductImage src={src} goToCrate={goToCrate} />
			<ProductName goToCrate={goToCrate} name={name} />
			<ProductPrice price={price} />
		</div>
	);
}
