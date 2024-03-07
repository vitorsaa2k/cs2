import { useCallback, useContext, useEffect, useRef } from "react";
import { VerticalRollerProps } from "../../../types/components";
import { ItemsColumn } from "./itemsColumn";
import { CrateContext } from "../../../context/crateContext/crateContext";

export function VerticalRollerInside(props: VerticalRollerProps) {
	const itemsContainer = useRef<HTMLDivElement>(null);
	const totalComponents = new Array(props.crateNumber).fill(0);
	const { drawnSkins } = useContext(CrateContext).state;
	const StartRoll = useCallback(() => {
		const trasnlatePx = 70 * 150 - 500;
		if (itemsContainer.current) {
			itemsContainer.current.style.transform = `translateY(-${trasnlatePx}px)`;
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
		drawnSkins ? StartRoll() : ResetAnimation();
	}, [drawnSkins, StartRoll, ResetAnimation]);

	return (
		<div
			ref={itemsContainer}
			className="flex w-full items-center justify-center transition-all duration-[8s] ease-out"
		>
			{totalComponents.map((_, index) => {
				return (
					<div aria-label="Items column" className="w-full" key={index}>
						<ItemsColumn items={props.items[index]} />
					</div>
				);
			})}
		</div>
	);
}
