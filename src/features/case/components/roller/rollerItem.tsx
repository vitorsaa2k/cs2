export function RollerItem({ name }: { name: string }) {
	return (
		<div className="w-[100px] h-[100px] border flex items-center justify-center">
			{name}
		</div>
	);
}
