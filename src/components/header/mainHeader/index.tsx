import { Logo } from "./logo";
import { LoginButton } from "./loginButton";
import { UserHeader } from "./userHeader";
import { useState } from "react";
import { DepositButton } from "./depositButton";
import { DepositModal } from "../../depositModal";
import { useGetUser } from "../../../hooks/useQuery";

export function MainHeader() {
	const [showModal, setShowModal] = useState(false);
	const { data: user, isLoading } = useGetUser();
	console.log(user);
	return (
		<div className="flex justify-between mx-5">
			<Logo />
			<div className="flex items-center gap-2">
				{isLoading ? null : (
					<>
						{user ? (
							<div onClick={() => setShowModal(true)}>
								<DepositButton />
							</div>
						) : null}

						{user ? <UserHeader user={user} /> : <LoginButton />}
					</>
				)}
			</div>
			{showModal && <DepositModal onClose={() => setShowModal(false)} />}
		</div>
	);
}
