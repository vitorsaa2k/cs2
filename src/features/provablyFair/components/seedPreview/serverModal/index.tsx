import { createPortal } from "react-dom";
import { Modal } from "../../../../../components/modal";
import { useGetServerSeeds } from "../../../../../hooks/useQuery";
import { SeedsModal } from "./seedsModal";
import { PiX } from "react-icons/pi";
import { IconContext } from "react-icons";
import { TailSpinner } from "../../../../../components/spinner";

export function ServerSeedHistoryModal({ onClose }: { onClose: () => void }) {
	const { data: seeds, isLoading } = useGetServerSeeds();
	return (
		<>
			{!isLoading ? (
				createPortal(
					<Modal>
						<section className="flex flex-col max-h-[700px] overflow-y-auto thinScrollBar max-w-2xl bg-zinc-950 p-4 rounded">
							<div className="flex items-center justify-between m-1">
								<h3 className="text-lg">Server Seed History</h3>
								<IconContext.Provider value={{ size: "32" }}>
									<div
										onClick={onClose}
										className="hover:bg-zinc-700 hover:cursor-pointer rounded"
									>
										<PiX />
									</div>
								</IconContext.Provider>
							</div>
							{!isLoading && seeds ? <SeedsModal seeds={seeds} /> : null}
						</section>
					</Modal>,
					document.getElementById("seedHistory-root")!
				)
			) : (
				<TailSpinner height={30} width={30} visible />
			)}
		</>
	);
}
