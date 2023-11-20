import { HTMLAttributes } from "react";

export function RollerContainer(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div className="relative w-[1000px] h-[100px] border border-black overflow-hidden">
			{props.children}
		</div>
	);
}
