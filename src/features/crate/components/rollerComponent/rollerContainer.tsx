import { RollerInside } from "./rollerInside";

export function RollerContainer() {
	return (
		<div className="flex max-w-7xl gap-1 overflow-hidden border-[20px] border-slate-800 rounded bg-slate-800 drop-shadow-[4px_4px_24px_rgba(0,0,0,0.25)]">
			<RollerInside />
		</div>
	);
}
