export function ProductImage({ src, name }: { src: string; name: string }) {
	return (
		<a href={`/crate/${name}`}>
			<img src={src} className="border border-black hover:cursor-pointer"></img>
		</a>
	);
}
