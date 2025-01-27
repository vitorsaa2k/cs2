import { LoginButton } from "./loginButton";
import { UserHeader } from "./userHeader";
import { useContext } from "react";
import { UserBalance } from "./userBalance";
import { useGetLoggedUser } from "../../../hooks/useQuery/user";
import { DepositModalContext } from "../../../contexts/depositModalContext";
import DepositModal from "../../depositModal";
import { Nav } from "../nav";
import { Line } from "./line";

export function MainHeader() {
	const modal = useContext(DepositModalContext);
	const { data: user, isLoading } = useGetLoggedUser();
	return (
		<div className="lg:flex-row max-lg:py-2 flex-col flex bg-[#1E293B]/50 lg:justify-between max-lg:gap-2 lg:pl-[17rem]">
			<Nav />
			<div className="flex max-lg:mx-auto items-center gap-4 ">
				{isLoading ? null : (
					<>
						{user ? (
							<>
								<div
									aria-label="Deposit Button"
									onClick={() => modal.setShowDepositModal(true)}
								>
									<UserBalance user={user} />
								</div>
								<Line />
							</>
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
