import clsx from "clsx";
import { SkinImage } from "../../../../components/skin/skinImage";
import { SkinType } from "../../../crate/types/api";

export function SkinsImages({ skins }: { skins: SkinType[] }) {
	return skins.map(skin => (
		<SkinImage
			className={clsx({
				"max-w-[16rem]": skins.length === 1,
				"max-w-[10rem]": skins.length > 1,
				"max-w-[6rem]": skins.length > 6,
			})}
			skin={skin}
		/>
	));
}
