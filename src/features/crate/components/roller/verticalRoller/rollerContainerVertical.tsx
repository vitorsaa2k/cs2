import { HTMLAttributes } from "react";

export function RollerContainerVertical(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			aria-label="Vertical roller container"
			className="relative h-[400px] flex items-center w-[1500px] overflow-hidden"
		>
			{props.children}
		</div>
	);
}
