export function DrawnSkinImage({
	iconUrl,
	color,
}: {
	iconUrl: string;
	color: string;
}) {
	return (
		<div className="relative">
			<div
				className={`absolute z-0 top-1/4 left-1/3 w-16 h-16 bg-${color}-item blur-xl rounded-full`}
			></div>
			<img className="max-w-[176px] relative z-10" src={iconUrl} />
		</div>
	);
}
