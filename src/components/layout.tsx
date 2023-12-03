import { HTMLAttributes } from "react";
import { Header } from "./header";
import { SkeletonTheme } from "react-loading-skeleton";
import { UserContextProvider } from "../contexts/userContext";

export function Layout(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<main className="text-white">
			<SkeletonTheme baseColor="#202020" highlightColor="#444">
				<UserContextProvider>
					<Header />
					{props.children}
				</UserContextProvider>
			</SkeletonTheme>
		</main>
	);
}
