import { useSearchParams } from "react-router-dom";
import { ProvablyFairIntroduction } from "../features/provablyFair/components/introduction";
import { SeedPreview } from "../features/provablyFair/components/seedPreview";
import { CheckRoll } from "../features/provablyFair/components/checkRoll";

export default function ProvablyFair() {
	const [searchParams, setSearchParams] = useSearchParams();
	const checkRoll = searchParams.get("checkRoll");
	return (
		<section className="flex flex-col justify-center items-center">
			<ProvablyFairIntroduction />
			<div className="flex gap-2">
				<button
					className={`${
						!checkRoll && "border"
					} px-2 py-1 rounded hover:bg-zinc-800 transition`}
					onClick={() => {
						setSearchParams("");
					}}
				>
					Seeds
				</button>
				<button
					className={`${
						checkRoll && "border"
					} px-2 py-1 rounded hover:bg-zinc-800 transition`}
					onClick={() => {
						setSearchParams("checkRoll=true");
					}}
				>
					Verification
				</button>
			</div>
			{checkRoll ? <CheckRoll /> : <SeedPreview />}
		</section>
	);
}
