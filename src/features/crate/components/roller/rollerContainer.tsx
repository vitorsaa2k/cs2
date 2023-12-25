import { HTMLAttributes } from "react";

export function RollerContainer(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			aria-label="Roller container"
			className="relative h-[400px] flex items-center w-[1500px] overflow-hidden"
		>
			{props.children}
		</div>
	);
}
