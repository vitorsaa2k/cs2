import { RollerProps } from "../../../types/components";
import { Line } from "../line";
import { RollerContainer } from "../rollerContainer";
import { RollerInside } from "../rollerInside";

export function HorizontalRoller({ items }: RollerProps) {
	return (
		<RollerContainer>
			<RollerInside items={items} />
			<Line />
		</RollerContainer>
	);
}
