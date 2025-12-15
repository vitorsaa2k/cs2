import { useContext, useEffect, useRef, useState } from "react";
import { MultiplierButton } from "./multiplierButton";
import {
	ActionTypes,
	PossibleMultipliers,
} from "@/features/upgrade/contextTypes";
import { UpgradeContext } from "@/contexts/upgradeContext";

const multiplierMap: Record<PossibleMultipliers, true> = {
	"1.5": true,
	"2": true,
	"5": true,
	"10": true,
	"20": true,
};

const allMultipliers: PossibleMultipliers[] = Object.keys(multiplierMap)
	.map(s => Number(s) as PossibleMultipliers)
	.sort((a, b) => a - b);

export function MultiplierControl() {
	const [selected, setSelected] = useState<number>(0);
	const [hovered, setHovered] = useState<number | null>();
	const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });
	const upgradeContext = useContext(UpgradeContext);

	function updateMultiplier(multiplier: PossibleMultipliers) {
		upgradeContext.dispatch({
			type: ActionTypes.UPDATE_MULTIPLIER,
			payload: multiplier,
		});
		if (upgradeContext.state.userSkins.length > 0) {
			upgradeContext.dispatch({
				type: ActionTypes.UPDATE_AVALIABLE_SKINS_FILTER,
				payload: {
					...upgradeContext.state.avaliableSkinsFilter,
					maxPrice:
						upgradeContext.state.userSkins
							.map(s => s.price)
							.reduce((prevValue, currValue) => prevValue + currValue, 0) *
						multiplier,
				},
			});
		}
	}

	useEffect(() => {
		const targetIndex = hovered ?? selected; // hover takes priority
		const container = containerRef.current;
		if (!container) return;

		const el = container.children[targetIndex] as HTMLElement;
		if (!el) return;

		setHighlightStyle({
			left: el.offsetLeft,
			width: el.offsetWidth,
		});
	}, [selected, hovered]);

	const containerRef = useRef<HTMLDivElement>(null);
	return (
		<div className="relative max-md:order-2">
			<div
				className="absolute top-0 bottom-0 bg-slate-400 z-10 rounded-lg transition-all duration-300"
				style={{
					left: highlightStyle.left,
					width: highlightStyle.width,
				}}
			/>

			<div className="absolute -inset-1 bg-slate-800 rounded-lg" />

			<div
				ref={containerRef}
				className="flex relative w-full h-full justify-center max-md:py-3 rounded-lg z-10"
			>
				{allMultipliers.map((multiplier, i) => (
					<MultiplierButton
						key={i}
						onClick={() => {
							setSelected(i);
							updateMultiplier(multiplier);
						}}
						onMouseEnter={() => setHovered(i)}
						onMouseLeave={() => setHovered(null)}
						multiplier={multiplier}
					/>
				))}
			</div>
		</div>
	);
}
