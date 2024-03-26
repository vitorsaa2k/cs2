import { useCallback, useContext, useEffect, useRef } from "react";
import { CrateContext } from "../../context/crateContext/crateContext";
import { RollerSkin } from "./rollerSkin";
import { CRATE_ANIMATION_DELAY_MS } from "../../../../consts/crate";

export function RollerInside() {
	const crateContext = useContext(CrateContext);
	const rollerContainerRef = useRef<HTMLDivElement>(null);
	const executeAnimation = useCallback(() => {
		if (!rollerContainerRef.current) return;
		if (crateContext.state.drawnSkins === null) {
			rollerContainerRef.current.style.transform = `translateX(0)`;
			setTimeout(() => {
				if (!rollerContainerRef.current) return;
				rollerContainerRef.current.style.transitionDuration = `${
					CRATE_ANIMATION_DELAY_MS / 1000
				}s`;
			}, 100);
			return;
		}
		rollerContainerRef.current.style.transform = `translateX(-16580px)`;
		setTimeout(() => {
			if (!rollerContainerRef.current) return;
			rollerContainerRef.current.style.transitionDuration = `0s`;
		}, CRATE_ANIMATION_DELAY_MS);
	}, [crateContext.state.drawnSkins]);
	useEffect(() => {
		executeAnimation();
	}, [executeAnimation]);

	return (
		<div
			className="flex gap-1 transition-all duration-[8s] ease-out"
			ref={rollerContainerRef}
		>
			{crateContext.state.horizontalSkins.map(skin => (
				<RollerSkin key={crypto.randomUUID()} skin={skin} />
			))}
		</div>
	);
}
