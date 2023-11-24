import { HTMLAttributes } from "react";
import { Header } from "./header";

export function Layout(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<main className="text-white font-inter">
			<Header />
			{props.children}
		</main>
	);
}
