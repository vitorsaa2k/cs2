import { WeaponSvg } from "./weaponSvg";

export function EmptySelectedSkinsDefaultDisplay({
	type,
}: {
	type: "itemToUpgrade" | "itemToReceive";
}) {
	return (
		<div className="flex flex-col items-center justify-center">
			<WeaponSvg />
			<div className="flex flex-col text-center">
				{type === "itemToReceive" ? (
					<>
						<p className="font-bold text-2xl">Choose An Item</p>
						<p>Item that you want to receive</p>
					</>
				) : (
					<>
						<p className="font-bold text-2xl">Choose Your Items</p>
						<p>Items that you want to upgrade</p>
					</>
				)}
			</div>
		</div>
	);
}
