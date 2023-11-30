import { VerticalRollerProps } from "../../../types/components";
import { LineVertical } from "./lineVertical";
import { RollerContainerVertical } from "./rollerContainerVertical";
import { VerticalRollerInside } from "./rollerInsideVertical";

export function VerticalRoller({
	isRolling,
	items,
	crateNumber,
}: VerticalRollerProps) {
	return (
		<RollerContainerVertical>
			<VerticalRollerInside
				crateNumber={crateNumber}
				isRolling={isRolling}
				items={items}
			/>
			<LineVertical />
		</RollerContainerVertical>
	);
}
