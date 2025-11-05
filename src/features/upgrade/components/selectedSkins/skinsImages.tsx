import { SkinImage } from "../../../../components/skin/skinImage";
import { SkinType } from "../../../crate/types/api";
import { cn } from "../../../../libs/utils";

export function SkinsImages({ skins }: { skins: SkinType[] }) {
	return skins.map(skin => (
		<SkinImage
			key={crypto.randomUUID()}
			className={cn({
				"max-w-[256px]": skins.length === 1,
				"max-w-[148px]": skins.length > 1,
				"max-w-[88px]": skins.length > 6,
			})}
			skin={skin}
		/>
	));
}
