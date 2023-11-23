export function ProductName({
	name,
	goToCrate,
}: {
	name: string;
	goToCrate: () => void;
}) {
	return (
		<p className="hover:cursor-pointer inline-block" onClick={goToCrate}>
			{name}
		</p>
	);
}
