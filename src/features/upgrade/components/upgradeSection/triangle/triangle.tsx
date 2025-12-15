import { useCallback, useContext, useEffect, useRef } from "react";
import { TriangleSVG } from "./triangleSVG";
import { UpgradeContext } from "@/contexts/upgradeContext";
import { generateMaxMinNumber } from "../../../../../utils/generateMaxMinNum";

export function Triangle() {
	const upgradeContext = useContext(UpgradeContext);
	const { hasWon } = upgradeContext.state;
	const triangleContainerRef = useRef<HTMLDivElement>(null);

	const excuteAnimation = useCallback(() => {
		if (triangleContainerRef.current) {
			triangleContainerRef.current.style.transitionDuration = "8s";
			const rotations = generateMaxMinNumber(5, 3);
			const baseRotation = rotations * 360;
			const wonRotation = generateMaxMinNumber(
				(upgradeContext.state.successChance / 100) * 360,
				0
			);
			const lostRotation = generateMaxMinNumber(
				360,
				(upgradeContext.state.successChance / 100) * 360
			);
			triangleContainerRef.current.style.rotate = `${
				baseRotation + (hasWon ? wonRotation : lostRotation)
			}deg`;
			setTimeout(() => {
				if (triangleContainerRef.current) resetTriangle();
			}, 8100);
		}
	}, [hasWon, upgradeContext.state.successChance]);

	const handleAnimation = useCallback(() => {
		if (typeof hasWon !== "boolean") return;
		excuteAnimation();
	}, [hasWon, excuteAnimation]);

	function resetTriangle() {
		if (triangleContainerRef.current) {
			setTimeout(() => {
				if (triangleContainerRef.current) {
					triangleContainerRef.current.style.transitionDuration = "0s";
					triangleContainerRef.current.style.rotate = "0deg";
				}
			}, 100);
		}
	}

	useEffect(() => {
		handleAnimation();
	}, [handleAnimation]);

	return (
		<div
			ref={triangleContainerRef}
			className={`absolute h-full flex justify-center transition-all duration-[8s] ease-out`}
		>
			<TriangleSVG />
		</div>
	);
}
