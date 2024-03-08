export function CrateName({ name }: { name: string }) {
	return <p className="text-4xl font-semibold py-10">{name.toUpperCase()}</p>;
}
