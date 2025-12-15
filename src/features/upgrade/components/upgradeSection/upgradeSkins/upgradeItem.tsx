import { useContext } from "react";
import { SkinType } from "../../../../crate/types/api";
import { UpgradeContext } from "@/contexts/upgradeContext";
import { ActionTypes } from "../../../contextTypes";
import { SkinImage } from "../../../../../components/skin/skinImage";
import { SkinName } from "../../../../../components/skin/skinName";

export function UpgradeItem({ skin }: { skin: SkinType }) {
	const upgradeContext = useContext(UpgradeContext);
	return (
		<div
			className="flex flex-col items-center hover:cursor-pointer border"
			onClick={() =>
				upgradeContext.dispatch({
					type: ActionTypes.REMOVE_UPGRADE_SKIN,
					payload: skin,
				})
			}
		>
			<SkinImage className="max-w-[128px]" skin={skin} />
			<SkinName name={skin.name} />
		</div>
	);
}
