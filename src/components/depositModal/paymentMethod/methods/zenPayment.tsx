import { IconContext } from "react-icons";
import { PiDotsThree } from "react-icons/pi";
import { Wrapper } from "../wrapper";

export function OthersPayment() {
	return (
		<Wrapper>
			<IconContext.Provider value={{ size: "32" }}>
				<PiDotsThree />
			</IconContext.Provider>
			<p>Others</p>
		</Wrapper>
	);
}
