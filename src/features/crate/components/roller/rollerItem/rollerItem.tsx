import { SkinType } from "../../../types/api";
import "./rolleItem.css";

export function RollerItem({ item }: { item: SkinType }) {
	const parsedName = item.name.split("|");
	const parsedColor = item.color.toLowerCase();
	return (
		<div
			className={`w-full h-[400px] flex flex-col items-center justify-center rollerItem-${parsedColor}`}
		>
			<img className="max-w-[250px]" src={item.img} />
			<div>{parsedName[0]}</div>
			<div>{parsedName[1]}</div>
		</div>
	);
}
