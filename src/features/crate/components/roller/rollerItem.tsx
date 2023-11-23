import { CrateSkin } from "../../types/api";

export function RollerItem({ item }: { item: CrateSkin }) {
	const parsedName = item.name.split("|");
	const parsedColor = item.color.toLowerCase();
	return (
		<div
			className={`w-full h-[400px] bg-${parsedColor}-200 border-x flex flex-col items-center justify-center`}
		>
			<img className="max-w-[320px]" src={item.img} />
			<div>{parsedName[0]}</div>
			<div>{parsedName[1]}</div>
		</div>
	);
}
