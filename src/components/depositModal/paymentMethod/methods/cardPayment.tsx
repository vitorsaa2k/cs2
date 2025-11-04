import { IconContext } from "react-icons";
import { PiCreditCard } from "react-icons/pi";
import { Wrapper } from "../wrapper";

export function CardPayment() {
	return (
		<Wrapper>
			<IconContext.Provider value={{ size: "32" }}>
				<PiCreditCard />
			</IconContext.Provider>
			<p>Card</p>
		</Wrapper>
	);
}
