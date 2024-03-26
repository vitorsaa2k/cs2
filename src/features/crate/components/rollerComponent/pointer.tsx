import { TriangleSvg } from "./triangleSvg";

export function Pointer() {
	return (
		<div className="flex absolute top-0 left-1/2 translate-x-[-50%] translate-y-[650%] gap-[260px] rotate-90">
			<TriangleSvg className="rotate-90" />
			<TriangleSvg className="-rotate-90" />
		</div>
	);
}
