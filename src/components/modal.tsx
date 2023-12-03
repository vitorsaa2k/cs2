import { ReactNode } from "react";

export function Modal({ children }: { children: ReactNode }) {
	return (
		<section className="flex animate-opacity-up flex-col fixed top-0 right-0 left-0 bottom-0 justify-start bg-black/50 items-center w-full text-white">
			{children}
		</section>
	);
}
