export function ProductImage({
	goToCase,
	src,
}: {
	goToCase: () => void;
	src: string;
}) {
	return (
		<img
			src={src}
			onClick={goToCase}
			className="border border-black hover:cursor-pointer"
		></img>
	);
}
