import { Seed } from "../../../types/api";
import { SeedItem } from "./seedItem";

export function SeedsModal({ seeds }: { seeds: Seed[] }) {
	return (
		<div className="flex flex-col gap-3">
			{seeds.map(seed => {
				return <SeedItem seed={seed} />;
			})}
		</div>
	);
}
