import { VerticalRollerProps } from "../../../types/components";
import { LineVertical } from "./lineVertical";
import { RollerContainerVertical } from "./rollerContainerVertical";
import { VerticalRollerInside } from "./rollerInsideVertical";

export function VerticalRoller({ items, crateNumber }: VerticalRollerProps) {
	return (
		<RollerContainerVertical>
			<VerticalRollerInside crateNumber={crateNumber} items={items} />
			<LineVertical />
		</RollerContainerVertical>
	);
}
