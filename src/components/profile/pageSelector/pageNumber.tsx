import { cn } from "@/libs/utils";
import { Link } from "react-router-dom";

export function PageNumber({
	currentPage,
	pageNumber,
}: {
	currentPage: number;
	pageNumber: number;
}) {
	const url = new URL(document.location.href);
	return (
		<Link to={`${url.pathname}?page=${pageNumber}`}>
			<p
				className={cn(
					{ "border-2": pageNumber === currentPage },
					"w-8 h-8 hover:cursor-pointer hover:bg-white/30 rounded flex justify-center items-center font-bold"
				)}
			>
				{pageNumber}
			</p>
		</Link>
	);
}
