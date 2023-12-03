import { Dispatch, SetStateAction } from "react";

export function BonusCode({
	code,
	setCode,
}: {
	code: string;
	setCode: Dispatch<SetStateAction<string>>;
}) {
	return (
		<label className="border w-full flex flex-col items-center rounded p-2">
			<p>Use your bonus code here:</p>
			<input
				className="w-full outline-none p-1 bg-transparent border-b"
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
