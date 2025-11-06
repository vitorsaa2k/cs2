import { Dispatch, SetStateAction } from "react";
import { getPagesOffset } from "../../../../../utils/getPagesOffset";
import { PageNumber } from "./pageNumber";
import { SeedPaginated } from "../../../types/api";

const MAX_VISIBLE_PAGES = 15;

export function PageSelector({
	seedPaginated,
	setPage,
}: {
	seedPaginated: SeedPaginated;
	setPage: Dispatch<SetStateAction<number>>;
}) {
	const offsetPages = getPagesOffset(
		seedPaginated.pagination.page,
		seedPaginated.pagination.totalPages
	);
	return (
		<div className="flex justify-center w-full">
			{seedPaginated.pagination.page > MAX_VISIBLE_PAGES && (
				<>
					<PageNumber
						pageNumber={1}
						seedPaginated={seedPaginated}
						setPage={setPage}
					/>
					...
				</>
			)}
			{offsetPages.map(pageNumber => (
				<PageNumber
					pageNumber={pageNumber}
					seedPaginated={seedPaginated}
					setPage={setPage}
				/>
			))}
			{seedPaginated.pagination.page <
				seedPaginated.pagination.totalPages - MAX_VISIBLE_PAGES && (
				<>
					...
					<PageNumber
						pageNumber={seedPaginated.pagination.totalPages}
						seedPaginated={seedPaginated}
						setPage={setPage}
					/>
				</>
			)}
		</div>
	);
}
