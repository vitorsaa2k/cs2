export function ProductImage({
	src,
	name,
	crateId,
}: {
	src: string;
	name: string;
	crateId: string;
}) {
	return (
		<a href={`/crate/${name}?crateId=${crateId}`}>
			<img
				src={src}
				className={`border border-black ${
					src.length <= 0 ? "min-h-[250px] min-w-[180px]" : "max-w-[180px]"
				} hover:cursor-pointer`}
			></img>
		</a>
	);
}
