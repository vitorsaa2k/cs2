export function CrateItem({
	itemName,
	price,
	img,
}: {
	itemName: string;
	price: number;
	img: string;
}) {
	return (
		<div className="bg-zinc-600 rounded m-3 flex flex-col items-center text-white">
			<div>{itemName}</div>
			<div>${price}</div>
			<img className="max-w-[128px]" src={img} />
		</div>
	);
}
