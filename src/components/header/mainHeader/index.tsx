import { LoginButton } from "./loginButton";
import { UserHeader } from "./userHeader";
import { useContext } from "react";
import { DepositButton } from "./depositButton";
import { useGetLoggedUser } from "../../../hooks/useQuery/user";
import { DepositModalContext } from "../../../contexts/depositModalContext";
import DepositModal from "../../depositModal";

export function MainHeader() {
	const modal = useContext(DepositModalContext);
	const { data: user, isLoading } = useGetLoggedUser();
	return (
		<div className="flex bg-[#1E293B]/50 -z-50 relative justify-between">
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
