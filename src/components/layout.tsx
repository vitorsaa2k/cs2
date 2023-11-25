import { HTMLAttributes } from "react";
import { Header } from "./header";
import { SkeletonTheme } from "react-loading-skeleton";

export function Layout(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<main className="text-white font-inter">
			<SkeletonTheme baseColor="#202020" highlightColor="#444">
				<Header />
				{props.children}
			</SkeletonTheme>
		</main>
	);
}
