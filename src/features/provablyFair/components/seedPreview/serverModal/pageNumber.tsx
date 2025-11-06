import { Dispatch, SetStateAction } from "react";
import { cn } from "../../../../../libs/utils";
import { SeedPaginated } from "../../../types/api";

export function PageNumber({
	seedPaginated,
	pageNumber,
	setPage,
}: {
	seedPaginated: SeedPaginated;
	pageNumber: number;
	setPage: Dispatch<SetStateAction<number>>;
}) {
	return (
		<div onClick={() => setPage(pageNumber)}>
			<p
				className={cn(
					{ border: pageNumber === seedPaginated.pagination.page },
					"p-1 hover:cursor-pointer hover:bg-gray-300/50 rounded min-w-8 flex justify-center w-full"
				)}
			>
				{pageNumber}
			</p>
		</div>
	);
}
