export function CrateItem({
	itemName,
	price,
	img,
}: {
	itemName: string;
	price: number;
	img: string;
}) {
	const parsedName = itemName.split("|");
	return (
		<div className="bg-zinc-600 rounded m-3 flex flex-col items-center w-[160px] h-[200px] justify-around text-white">
			<div className="flex flex-col items-center">
				<div>{parsedName[0]}</div>
				<div>{parsedName[1]}</div>
				<div>${price}</div>
			</div>
			<img className="max-w-[128px]" src={img} />
		</div>
	);
}
