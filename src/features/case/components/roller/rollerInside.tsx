import { useCallback, useEffect, useRef } from "react";
import { RollerItem } from "./rollerItem";
import { RollerInsideProps } from "../../types/components";

export function RollerInside(props: RollerInsideProps) {
	const itemsContainer = useRef<HTMLDivElement>(null);

	const StartRoll = useCallback(() => {
		const randomIndex = Math.floor(Math.random() * props.items.length);
		const randomNumber = Math.floor(Math.random() * 50);
		const randomNumberPlus = Math.floor(Math.random() * 50);
		const trasnlatePx = randomIndex * 100 - 450;
		if (itemsContainer.current) {
			itemsContainer.current.style.transform = `translateX(-${
				trasnlatePx - randomNumber + randomNumberPlus
			}px)`;
			console.log(`you got ${props.items[randomIndex]}`);
		}
	}, [props.items]);
	useEffect(() => {
		props.isRolling ? StartRoll() : null;
	}, [props.isRolling, StartRoll]);

	return (
		<div
			ref={itemsContainer}
			className="flex absolute top-0 left-0 transition-all duration-[8s] ease-out"
		>
			{props.items.map((item: string) => {
				return <RollerItem name={item} />;
			})}
		</div>
	);
}
