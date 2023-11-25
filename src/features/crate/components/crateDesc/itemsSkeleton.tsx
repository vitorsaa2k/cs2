import Skeleton from "react-loading-skeleton";

export function ItemsSkeleton() {
	return (
		<div className="grid gap-6 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 min-[320px]:grid-cols-2">
			<Skeleton width={160} height={200} />
			<Skeleton width={160} height={200} />
			<Skeleton width={160} height={200} />
			<Skeleton width={160} height={200} />
			<Skeleton width={160} height={200} />
			<Skeleton width={160} height={200} />
			<Skeleton width={160} height={200} />
			<Skeleton width={160} height={200} />
			<Skeleton width={160} height={200} />
			<Skeleton width={160} height={200} />
			<Skeleton width={160} height={200} />
			<Skeleton width={160} height={200} />
		</div>
	);
}
