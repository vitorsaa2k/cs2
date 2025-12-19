import { Pagination } from "@/hooks/useQuery/inventory";
import { InventoryType } from "@/types/api";
import { getPagesOffset } from "@/utils/getPagesOffset";
import { PageNumber } from "./pageNumber";

const MAX_VISIBLE_PAGES = 7;

export function PageSelectorProfile({
	inventory,
}: {
	inventory: InventoryType & Pagination;
}) {
	const offsetPages = getPagesOffset(
		inventory.pagination.page,
		inventory.pagination.maxPages,
		MAX_VISIBLE_PAGES
	);
	return (
		<div className="flex w-full justify-center gap-1">
			{inventory.pagination.page > MAX_VISIBLE_PAGES && (
				<>
					<PageNumber pageNumber={1} currentPage={inventory.pagination.page} />
					...
				</>
			)}
			{offsetPages.map(pageNumber => (
				<PageNumber
					key={pageNumber}
					currentPage={inventory.pagination.page}
					pageNumber={pageNumber}
				/>
			))}
			{inventory.pagination.page <
				inventory.pagination.maxPages - MAX_VISIBLE_PAGES && (
				<>
					...
					<PageNumber
						pageNumber={inventory.pagination.maxPages}
						currentPage={inventory.pagination.page}
					/>
				</>
			)}
		</div>
	);
}
