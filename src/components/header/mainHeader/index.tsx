import { Logo } from "./logo";
import { LoginButton } from "./loginButton";
import { UserHeader } from "./userHeader";
import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/userContext";
import { DepositButton } from "./depositButton";
import { DepositModal } from "../../depositModal";

export function MainHeader() {
	const userContext = useContext(UserContext);
	const user = userContext.user;
	const [showModal, setShowModal] = useState(false);

	return (
		<div className="flex justify-between mx-5">
			<Logo />
			<div className="flex items-center gap-2">
				{user.id.length > 0 ? (
					<div onClick={() => setShowModal(true)}>
						<DepositButton />
					</div>
				) : null}

				{user.displayName.length > 0 ? (
					<UserHeader user={user} />
				) : (
					<LoginButton />
				)}
			</div>
			{showModal && <DepositModal onClose={() => setShowModal(false)} />}
		</div>
	);
}
