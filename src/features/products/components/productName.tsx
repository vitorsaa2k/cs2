export function ProductName({
	name,
	goToCase,
}: {
	name: string;
	goToCase: () => void;
}) {
	return (
		<p className="hover:cursor-pointer inline-block" onClick={goToCase}>
			{name}
		</p>
	);
}
