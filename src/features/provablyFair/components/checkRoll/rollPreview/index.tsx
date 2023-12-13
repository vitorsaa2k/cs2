import { RollType } from "../../../types/api";
import { SeedsArea } from "./seedsArea";

export function RollPreview({ roll }: { roll: RollType }) {
	return (
		<>
			<SeedsArea roll={roll} />
		</>
	);
}
