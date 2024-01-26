import { HTMLAttributes } from "react";

interface SkinsWrapperProps extends HTMLAttributes<HTMLDivElement> {}

export function SkinsWrapper(props: SkinsWrapperProps) {
	return (
		<div
			className="w-[30rem] h-[20rem] bg-zinc-800 flex flex-col justify-center"
			{...props}
		>
			{props?.children}
		</div>
	);
}
