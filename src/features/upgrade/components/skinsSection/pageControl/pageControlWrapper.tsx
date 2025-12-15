import { ComponentProps } from "react";

export function PageControlWrapper(props: ComponentProps<"div">) {
	return (
		<div className="flex justify-between m-3" {...props}>
			{props.children}
		</div>
	);
}
