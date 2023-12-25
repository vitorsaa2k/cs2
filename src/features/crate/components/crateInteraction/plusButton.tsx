import { ButtonHTMLAttributes } from "react";
import { IconContext } from "react-icons";
import { PiPlus } from "react-icons/pi";

export function PlusButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			aria-label="Plus button"
			{...props}
			className="border rounded active:border-black"
		>
			<IconContext.Provider value={{ size: "36" }}>
				<PiPlus />
			</IconContext.Provider>
		</button>
	);
}
