import { CaseSkin } from "../../types/api";

export function RollerItem({ item }: { item: CaseSkin }) {
	return (
		<div className="w-[100px] h-[100px] border flex items-center justify-center">
			<img src={item.img} />
			{/* {item.name} */}
		</div>
	);
}
