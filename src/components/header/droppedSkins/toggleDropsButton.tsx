import { ButtonHTMLAttributes, ReactNode } from "react";

interface ToggleDropsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon: ReactNode;
}

export function ToggleDropsButton({ icon, ...props }: ToggleDropsProps) {
	return (
		<button
			{...props}
			className={`flex w-full h-full gap-3  items-center justify-center text-base font-semibold ${props.className}`}
		>
			{icon}
			{props.children}
		</button>
	);
}
