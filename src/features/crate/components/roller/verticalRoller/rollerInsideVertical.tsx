import { useCallback, useEffect, useRef } from "react";
import { RollerInsideProps } from "../../../types/components";
import { ItemsColumn } from "./itemsColumn";

export function VerticalRollerInside(props: RollerInsideProps) {
	const itemsContainer = useRef<HTMLDivElement>(null);
	const totalComponents = new Array(props.crateNumber).fill(0);

	const StartRoll = useCallback(() => {
		const randomNumber = Math.floor(Math.random() * 125);
		const randomNumberPlus = Math.floor(Math.random() * 125);
		const trasnlatePx = 70 * 150 - 400;
		if (itemsContainer.current) {
			itemsContainer.current.style.transform = `translateY(-${
				trasnlatePx - randomNumber + randomNumberPlus
			}px)`;
		}
		setTimeout(() => {
			if (itemsContainer.current)
				itemsContainer.current.style.transitionDuration = `0s`;
		}, 8200);
	}, []);

	const ResetAnimation = useCallback(() => {
		if (itemsContainer.current) {
			itemsContainer.current.style.transform = `translateY(0)`;
			setTimeout(() => {
				if (itemsContainer.current)
					itemsContainer.current.style.transitionDuration = `8s`;
			}, 100);
		}
	}, []);
	useEffect(() => {
		props.isRolling ? StartRoll() : ResetAnimation();
	}, [props.isRolling, StartRoll, ResetAnimation]);

	return (
		<div
			ref={itemsContainer}
			className="flex w-full items-center justify-between transition-all duration-[8s] ease-out"
		>
			{totalComponents.map((_, index) => {
				return (
					<div key={index}>
						<ItemsColumn items={props.items[index]} />
					</div>
				);
			})}
		</div>
	);
}
