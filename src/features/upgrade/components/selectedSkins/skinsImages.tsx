import clsx from "clsx";
import { SkinImage } from "../../../../components/skin/skinImage";
import { SkinType } from "../../../crate/types/api";

export function SkinsImages({ skins }: { skins: SkinType[] }) {
	return skins.map(skin => (
		<SkinImage
			key={crypto.randomUUID()}
			className={clsx({
				"max-w-[256px]": skins.length === 1,
				"max-w-[148px]": skins.length > 1,
				"max-w-[88px]": skins.length > 6,
			})}
			skin={skin}
		/>
	));
}
