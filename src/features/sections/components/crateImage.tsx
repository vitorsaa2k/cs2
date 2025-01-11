export function CrateImage({ src }: { src: string }) {
	return (
		<img
			src={src}
			className={`${
				src.length <= 0 ? "min-h-[229.59px] min-w-[164px]" : "max-w-[164px]"
			} hover:cursor-pointer rounded`}
		></img>
	);
}
