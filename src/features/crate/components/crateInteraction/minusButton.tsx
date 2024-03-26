import { ButtonHTMLAttributes } from "react";
import { IconContext } from "react-icons";
import { PiMinus } from "react-icons/pi";

export function MinusButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			aria-label="Minus button"
			{...props}
			className="rounded p-3 bg-slate-800 disabled:bg-slate-900"
		>
			<IconContext.Provider value={{ size: "24" }}>
				<PiMinus />
			</IconContext.Provider>
		</button>
	);
}
