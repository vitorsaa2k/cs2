import { useCallback, useEffect, useRef } from "react";
import { RollerItem } from "./rollerItem/rollerItem";
import { RollerInsideProps } from "../../types/components";

export function RollerInside(props: RollerInsideProps) {
	const itemsContainer = useRef<HTMLDivElement>(null);

	const StartRoll = useCallback(() => {
		const randomNumber = Math.floor(Math.random() * 125);
		const randomNumberPlus = Math.floor(Math.random() * 125);
		const trasnlatePx = 70 * 250 - 650;
		if (itemsContainer.current) {
			itemsContainer.current.style.transform = `translateX(-${
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
			itemsContainer.current.style.transform = `translateX(0)`;
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
			className="flex items-center transition-all duration-[8s] ease-out"
		>
			{props.items.map(item => {
				return (
					<div key={item.classid}>
						<RollerItem item={item} />
					</div>
				);
			})}
		</div>
	);
}
