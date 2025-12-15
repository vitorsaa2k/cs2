import { useEffect, useRef } from "react";

export function Circle({ chance }: { chance: number }) {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.style.backgroundImage = `conic-gradient(white ${chance}%, transparent 0%)`;
		}
	}, [chance]);
	return (
		<div
			ref={containerRef}
			className="w-[16rem] h-[16rem] flex items-center justify-center rounded-full transition-all"
		></div>
	);
}
