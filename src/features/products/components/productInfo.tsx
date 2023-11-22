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
	function goToCase() {
		navigate(`/case/${name}`);
	}
	return (
		<div>
			<ProductImage src={src} goToCase={goToCase} />
			<ProductName goToCase={goToCase} name={name} />
			<ProductPrice price={price} />
		</div>
	);
}
