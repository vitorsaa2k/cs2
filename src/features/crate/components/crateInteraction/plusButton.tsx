import { ButtonHTMLAttributes } from "react";
import { IconContext } from "react-icons";
import { PiPlus } from "react-icons/pi";

export function PlusButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			aria-label="Plus button"
			{...props}
			className="rounded bg-slate-800 p-3 disabled:bg-slate-900"
		>
			<IconContext.Provider value={{ size: "24" }}>
				<PiPlus />
			</IconContext.Provider>
		</button>
	);
}
