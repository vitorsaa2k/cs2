import { parseItemNameExterior } from "../../../../utils/crate/parseItemName";

export function CrateItem({
	name,
	price,
	img,
}: {
	name: string;
	price: number;
	img: string;
}) {
	const itemName = parseItemNameExterior(name);
	return (
		<div className="bg-zinc-600 rounded m-3 flex flex-col items-center w-[160px] h-[200px] justify-around text-white">
			<div className="flex flex-col items-center">
				<div>{itemName[0]}</div>
				<div>{itemName[1]}</div>
				<div>{itemName[2]}</div>
				<div>${price}</div>
			</div>
			<img className="max-w-[128px]" src={img} />
		</div>
	);
}
