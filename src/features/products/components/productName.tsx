export function ProductName({ name }: { name: string }) {
	return (
		<a href={`/crate/${name}`} className="hover:cursor-pointer inline-block">
			{name}
		</a>
	);
}
