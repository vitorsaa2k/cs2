import { DroppedItem } from "./droppedItem";
import { LiveDropItem } from "../../../features/crate/types/api";

export function Drop({ item }: { item: LiveDropItem }) {
	return (
		<>
			<DroppedItem item={item} />
		</>
	);
}
