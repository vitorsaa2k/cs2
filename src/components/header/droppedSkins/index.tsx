import { useState } from "react";
import { DropsRow } from "./dropsRow";
export function DroppedSkins() {
	const [drops, setDrops] = useState(["a","b","c"])
	
	const addDrop = ()=>{
		const updateDrops = [...drops,  "a"]
		setDrops(updateDrops);
	}
	return (
		<div className="flex border  border-black h-20 overflow-hidden max-h-20">
			<div className="border-r  border-black flex items-center justify-center">
				<div>liveDrop</div>
				<div className="flex-col">
				<button>
					bestSkins
				</button>
				<button onClick={addDrop}>
					allSkins
				</button>
				</div>
			</div>
			<div className="w-full border-black flex items-center ">
				<DropsRow
				items ={drops}/>
			</div>
		</div>
	);
}
