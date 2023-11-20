import { HTMLAttributes } from "react";
import { Header } from "./header";

export function Layout(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<>
			<Header />
			{props.children}
		</>
	);
}
