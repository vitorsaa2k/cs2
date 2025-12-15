import { HTMLAttributes } from "react";

interface WrapperProps extends HTMLAttributes<HTMLDivElement> {}

export function SkinsWrapper(props: WrapperProps) {
	return (
		<div className="grid-cols-[repeat(auto-fill,minmax(128px,1fr))] grid gap-2">
			{props.children}
		</div>
	);
}
