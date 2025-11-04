import { Dispatch, SetStateAction } from "react";

export function BonusCode({
	code,
	setCode,
}: {
	code: string;
	setCode: Dispatch<SetStateAction<string>>;
}) {
	return (
		<label className="w-full flex flex-col gap-1 rounded">
			<p>Use your bonus code here:</p>
			<input
				className="w-full border border-slate-400 focus:border-white outline-none p-2 bg-transparent rounded transition-all"
				placeholder="Bonus Code"
				value={code}
				onChange={e => {
					setCode(e.currentTarget.value);
				}}
				type="text"
			/>
		</label>
	);
}
