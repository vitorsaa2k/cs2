import { SkinImage } from "../../../../components/skin/skinImage";
import { CrateSkin } from "../../types/api";
import { SkinInfo } from "./skinInfo";
import { parseItemColor } from "@/utils/crate/parseItemColor";

export function RollerSkin({ skin }: { skin: CrateSkin }) {
	const parsedColor = parseItemColor(skin);
	return (
		<div
			className={`min-w-[240px] h-[240px] flex flex-col justify-center border-b-${parsedColor}-item border-b rounded items-center bg-slate-900/50  rollerItem-${parsedColor}`}
		>
			<SkinImage skin={skin} className="max-w-[180px]" />
			<SkinInfo skin={skin} />
		</div>
	);
}
