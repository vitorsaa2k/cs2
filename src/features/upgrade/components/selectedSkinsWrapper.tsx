import { HTMLAttributes } from "react";

interface SkinsWrapperProps extends HTMLAttributes<HTMLDivElement> {}

export function SelectedSkinsWrapper(props: SkinsWrapperProps) {
	return (
		<div
			className="w-full h-full flex flex-col justify-center rounded"
			{...props}
		>
			{props?.children}
		</div>
	);
}
