import { CrateImage } from "./crateImage";
import { CrateName } from "./crateName";
import { CratePrice } from "./cratePrice";

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
			<CrateImage crateId={crateId} name={name} src={src} />
			<CrateName crateId={crateId} name={name} />
			<CratePrice price={price} />
		</div>
	);
}
