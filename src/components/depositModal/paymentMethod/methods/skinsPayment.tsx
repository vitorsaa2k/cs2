import { IconContext } from "react-icons";
import { GiPistolGun } from "react-icons/gi";
import { Wrapper } from "../wrapper";
export function SkinsPayment() {
	return (
		<Wrapper>
			<IconContext.Provider value={{ size: "32" }}>
				<GiPistolGun />
			</IconContext.Provider>
			<p>Skins</p>
		</Wrapper>
	);
}
