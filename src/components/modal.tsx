import { ReactNode } from "react";

export function Modal({ children }: { children: ReactNode }) {
	return (
		<section className="animate-opacity-up flex items-center z-50 justify-center fixed top-0 right-0 left-0 bottom-0 bg-black/50 w-full text-white">
			{children}
		</section>
	);
}
