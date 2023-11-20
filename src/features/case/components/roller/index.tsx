import { useState } from "react";
import { RollerContainer } from "./rollerContainer";
import { RollerInside } from "./rollerInside";
import { Line } from "./line";

export function Roller() {
	const [isRolling, setIsRolling] = useState(false);
	const items = [
		"item1",
		"item2",
		"item3",
		"item4",
		"item5",
		"item6",
		"item7",
		"item8",
		"item9",
		"item10",
		"item11",
		"item12",
		"item13",
		"item14",
		"item15",
		"item16",
		"item17",
		"item18",
		"item19",
		"item20",
		"item21",
		"item22",
		"item23",
		"item24",
		"item25",
		"item26",
		"item27",
		"item28",
		"item29",
		"item30",
	];
	return (
		<div className="m-3 flex flex-col items-center">
			<RollerContainer>
				<RollerInside isRolling={isRolling} items={items} />
				<Line />
			</RollerContainer>
			<button
				onClick={() => {
					setIsRolling(true);
				}}
			>
				Open Case
			</button>
			<button
				onClick={() => {
					setIsRolling(false);
				}}
			>
				Reset
			</button>
		</div>
	);
}
