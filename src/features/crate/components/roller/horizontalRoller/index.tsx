import { RollerProps } from "../../../types/components";
import { Line } from "../line";
import { RollerContainer } from "../rollerContainer";
import { RollerInside } from "../rollerInside";

export function HorizontalRoller({ isRolling, items }: RollerProps) {
	return (
		<RollerContainer>
			<RollerInside isRolling={isRolling} items={items} />
			<Line />
		</RollerContainer>
	);
}
