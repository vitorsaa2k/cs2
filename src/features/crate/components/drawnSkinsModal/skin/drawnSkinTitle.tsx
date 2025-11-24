export function DrawnSkinTitle({
	weapon,
	skinName,
}: {
	weapon: string;
	skinName: string;
}) {
	return (
		<div className="flex flex-col items-start w-full">
			<p className="font-normal text-xs">{weapon}</p>
			<p className="font-semibold text-xs line-clamp-1">{skinName}</p>
		</div>
	);
}
