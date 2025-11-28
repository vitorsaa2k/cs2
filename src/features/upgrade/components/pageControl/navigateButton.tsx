import { ComponentProps } from "react";
import { cn } from "../../../../libs/utils";

export function NavigateButton(props: ComponentProps<"button">) {
	return (
		<button
			className={cn(
				"rounded-lg p-2 bg-slate-800 disabled:bg-black/50",
				props.className
			)}
			{...props}
		>
			{props.children}
		</button>
	);
}
