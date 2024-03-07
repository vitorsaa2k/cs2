import { IconContext } from "react-icons";
import { PiUser } from "react-icons/pi";

export function TotalAccounts() {
	return (
		<div className="flex">
			<IconContext.Provider value={{ className: "fill-[#BFA561]", size: "24" }}>
				<PiUser />
			</IconContext.Provider>
			<p>xxxx Accounts</p>
		</div>
	);
}
