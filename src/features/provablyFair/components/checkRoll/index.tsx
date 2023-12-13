import { useEffect, useState } from "react";
import { getRollById } from "../../../../services/rollApi";
import { RollPreview } from "./rollPreview";
import { JsonArea } from "./rollPreview/jsonArea";
import { useSearchParams } from "react-router-dom";

export function CheckRoll() {
	const [rollId, setRollId] = useState("");
	const [roll, setRoll] = useState();
	const [searchParams, setSearchParams] = useSearchParams();
	const searchRollId = searchParams.get("rollId");
	useEffect(() => {
		searchRollId ? getRollById(searchRollId).then(res => setRoll(res)) : null;
	}, [searchRollId]);
	async function getRoll() {
		if (searchRollId) {
			getRollById(searchRollId).then(res => setRoll(res));
		} else {
			getRollById(rollId).then(res => setRoll(res));
		}
	}
	return (
		<div>
			<div className="flex gap-3 justify-center m-3">
				<input
					placeholder="Roll-Id"
					className="bg-transparent outline-none p-4 border rounded"
					value={searchRollId ?? rollId}
					onChange={e => {
						setSearchParams(`checkRoll=true`);
						setRollId(e.currentTarget.value);
					}}
				/>
				<button
					className="border px-4 rounded hover:bg-white/5 transition-all"
					onClick={getRoll}
				>
					Verify
				</button>
			</div>
			<div className="flex-col xl:flex-row flex items-center gap-2">
				{roll ? <RollPreview roll={roll} /> : null}
				{roll ? <JsonArea roll={roll} /> : null}
			</div>
		</div>
	);
}
