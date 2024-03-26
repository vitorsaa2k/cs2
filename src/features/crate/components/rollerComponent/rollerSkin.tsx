import { useMemo } from "react";
import { SkinImage } from "../../../../components/skin/skinImage";
import { CrateSkin } from "../../types/api";
import { SkinInfo } from "./skinInfo";

export function RollerSkin({ skin }: { skin: CrateSkin }) {
	const parsedColor = useMemo(() => {
		switch (skin.rarity_color) {
			case "5e98d9":
				return "blue";
			case "8847ff":
				return "purple";
			case "eb4b4b":
				return "red";
			case "d32ce6":
				return "pink";
			case "e4ae39":
				return "yellow";
			default:
				return "blue";
		}
	}, [skin.rarity_color]);
	return (
		<div
			className={`min-w-[240px] h-[240px] flex flex-col justify-center border-b-${parsedColor}-item border-b rounded items-center bg-slate-900/50  rollerItem-${parsedColor}`}
		>
			<SkinImage skin={skin} className="max-w-[180px]" />
			<SkinInfo skin={skin} />
		</div>
	);
}
