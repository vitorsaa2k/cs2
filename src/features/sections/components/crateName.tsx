export function CrateName({
	name,
	crateId,
}: {
	name: string;
	crateId: string;
}) {
	return (
		<a
			href={`/crate/${name}?=${crateId}`}
			className="hover:cursor-pointer inline-block"
		>
			{name}
		</a>
	);
}
