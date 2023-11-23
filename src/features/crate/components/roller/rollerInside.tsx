import { useCallback, useEffect, useRef } from "react";
import { RollerItem } from "./rollerItem";
import { RollerInsideProps } from "../../types/components";

export function RollerInside(props: RollerInsideProps) {
	const itemsContainer = useRef<HTMLDivElement>(null);

	const StartRoll = useCallback(() => {
		const randomNumber = Math.floor(Math.random() * 50);
		const randomNumberPlus = Math.floor(Math.random() * 50);
		const trasnlatePx = 70 * 256 - 450;
		if (itemsContainer.current) {
			itemsContainer.current.style.transform = `translateX(-${
				trasnlatePx - randomNumber + randomNumberPlus
			}px)`;
		}
	}, []);
	useEffect(() => {
		props.isRolling ? StartRoll() : null;
	}, [props.isRolling, StartRoll]);

	return (
		<div
			ref={itemsContainer}
			className="flex items-center transition-all duration-[8s] ease-out"
		>
			{props.items.map(item => {
				return <RollerItem item={item} />;
			})}
		</div>
	);
}