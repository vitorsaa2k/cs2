import { useEffect, useRef } from "react";
import { TriangleSVG } from "../triangle/triangleSVG";

export function Circle({ chance }: { chance: number }) {
	const x = 115 + 110 * Math.cos(100);
	const y = 115 + 110 * Math.sin(100);
	const x2 = 360 * (chance / 100);
	console.log(x2);

	const containerRef = useRef<HTMLDivElement>(null);
	const triangleContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.style.backgroundImage = `conic-gradient(white ${chance}%, transparent 0%)`;
		}
		if (triangleContainerRef.current) {
			triangleContainerRef.current.style.rotate = `${x2}deg`;
		}
	}, [chance, x2]);
	return (
		<>
			{/* 	<svg className="w-[230px] h-[230px]">
				<circle
					cx="115"
					cy="115"
					r="110"
					className="fill-white stroke-green-700"
				></circle>
				<path
					className="fill-green-700"
					d={`M115,115 L115,5 A110,110 1 0,1 225,115 z`}
				></path>
			</svg> */}
			<div
				ref={containerRef}
				className="w-[16rem] h-[16rem] flex items-center justify-center rounded-full transition-all mx-6 border"
			>
				<div
					ref={triangleContainerRef}
					className={`absolute w-full h-full flex justify-center`}
				>
					<TriangleSVG />
				</div>
				<p className="text-green-700">{chance?.toFixed(2) ?? 0}%</p>
			</div>
		</>
	);
}
