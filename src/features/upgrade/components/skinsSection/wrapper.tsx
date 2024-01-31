import { HTMLAttributes } from "react";

interface WrapperProps extends HTMLAttributes<HTMLDivElement> {}

export function Wrapper(props: WrapperProps) {
	return (
		<div className="p-4 rounded bg-zinc-950 xl:min-h-[672px] xl:min-w-[680px]">
			<div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2">
				{props.children}
			</div>
		</div>
	);
}
