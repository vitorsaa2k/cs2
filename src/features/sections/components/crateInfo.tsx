import { CrateImage } from "./crateImage";
import { CrateName } from "./crateName";
import { CratePrice } from "./cratePrice";

export function CrateInfo({
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
		<a
			href={`/crate/${name}?crateId=${crateId}`}
			className="hover:bg-slate-900 hover:cursor-pointer p-4 rounded"
		>
			<CrateImage src={src} />
			<CrateName crateId={crateId} name={name} />
			<CratePrice price={price} />
		</a>
	);
}
