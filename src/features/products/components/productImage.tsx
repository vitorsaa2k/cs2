export function ProductImage({
	goToCrate,
	src,
}: {
	goToCrate: () => void;
	src: string;
}) {
	return (
		<img
			src={src}
			onClick={goToCrate}
			className="border border-black hover:cursor-pointer"
		></img>
	);
}
