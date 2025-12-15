import { ComponentProps } from "react";
import { cn } from "@/libs/utils";

interface TabSelectorButtonProps extends ComponentProps<"button"> {
	isSelected: boolean;
}

export function TabSelectorButton({
	isSelected,
	...props
}: TabSelectorButtonProps) {
	return (
		<button
			className={cn(
				"border-b border-transparent text-center w-full bg-slate-800 p-4",
				props.className,
				{
					"border-white": isSelected,
					"text-white/40": !isSelected,
				}
			)}
			onClick={props.onClick}
		>
			{props?.children}
		</button>
	);
}
