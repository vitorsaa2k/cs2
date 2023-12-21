import { useRef } from "react";
import { DroppedItem } from "./droppedItem";
import { LiveDropItem } from "../../../features/crate/types/api";

export function Drop({ item }: { item: LiveDropItem }) {
	const dropDiv = useRef<HTMLDivElement>(null);
	const contentDiv = useRef<HTMLDivElement>(null);
	const userDiv = useRef<HTMLDivElement>(null);
	setTimeout(() => {
		if (dropDiv.current) {
			dropDiv.current.style.transform = `translateY(0)`;
		}
	}, 8);
	const handleHoverEnter = () => {
		if (dropDiv && contentDiv && userDiv && contentDiv.current) {
			contentDiv.current.style.transform = "translateY(-8rem)";
			userDiv.current?.classList.replace("opacity-0", "opacity-100");
		}
	};
	// setTimeout()
	const handleHoverQuit = () => {
		if (dropDiv && contentDiv && contentDiv.current) {
			contentDiv.current.style.transform = "translateY(0)";
			userDiv.current?.classList.replace("opacity-100", "opacity-0");
		}
	};

	return (
		<div
			ref={dropDiv}
			onMouseEnter={handleHoverEnter}
			onMouseLeave={handleHoverQuit}
			className={`flex flex-col text-xs transition-all duration-[1s] -translate-y-16 ease-out`}
		>
			<div ref={contentDiv} className="transition-all duration-[0.18s]">
				<DroppedItem item={item} />
				<div
					ref={userDiv}
					className="w-full h-full absolute transition-all duration-[0.18s] opacity-0"
				>
					<a
						className="w-full h-full flex flex-col justify-center items-center gap-2"
						href={`/user/${item.userId}`}
					>
						<img className="max-w-[64px] rounded" src={`${item.userIcon}`} />
						{item.userDisplayName}
					</a>
				</div>
			</div>
		</div>
	);
}
