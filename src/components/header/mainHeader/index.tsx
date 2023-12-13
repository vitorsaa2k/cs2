import { Logo } from "./logo";
import { LoginButton } from "./loginButton";
import { UserHeader } from "./userHeader";
import { useContext } from "react";
import { DepositButton } from "./depositButton";
import { DepositModal } from "../../depositModal";
import { useGetUser } from "../../../hooks/useQuery";
import { DepositModalContext } from "../../../contexts/depositModalContext";

export function MainHeader() {
	const modal = useContext(DepositModalContext);
	const { data: user, isLoading } = useGetUser();
	return (
		<div className="flex justify-between mx-5">
			<Logo />
			<div className="flex items-center gap-2">
				{isLoading ? null : (
					<>
						{user ? (
							<div onClick={() => modal.setShowDepositModal(true)}>
								<DepositButton />
							</div>
						) : null}

						{user ? <UserHeader user={user} /> : <LoginButton />}
					</>
				)}
			</div>
			{modal.showDepositModal && (
				<DepositModal
					onClose={() => {
						modal.setShowDepositModal(false);
					}}
				/>
			)}
		</div>
	);
}
