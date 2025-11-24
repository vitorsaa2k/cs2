export function DrawSkinTitle({
	weapon,
	skinName,
}: {
	weapon: string;
	skinName: string;
}) {
	return (
		<div className="flex flex-col items-start w-full">
			<p className="font-normal text-xs">{weapon}</p>
			<p className="font-semibold text-xs">{skinName}</p>
		</div>
	);
}
