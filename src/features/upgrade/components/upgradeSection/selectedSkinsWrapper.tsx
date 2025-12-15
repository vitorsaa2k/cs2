import { HTMLAttributes } from "react";

interface SkinsWrapperProps extends HTMLAttributes<HTMLDivElement> {}

export function SelectedSkinsWrapper(props: SkinsWrapperProps) {
	return (
		<div
			className="w-full h-full max-lg:h-[18rem] flex flex-col justify-center rounded max-lg:bg-slate-800 max-lg:py-3"
			{...props}
		>
			{props?.children}
		</div>
	);
}
