import { ButtonHTMLAttributes } from "react";
import { IconContext } from "react-icons";
import { PiMinus } from "react-icons/pi";

export function MinusButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button {...props} className="border rounded active:border-black">
			<IconContext.Provider value={{ size: "36" }}>
				<PiMinus />
			</IconContext.Provider>
		</button>
	);
}
