import clsx from "clsx";
import { parseItemNameFull } from "../../utils/crate/parseItemName";

export function SkinName({
	name,
	variant = "sm",
}: {
	name: string;
	variant?: "sm" | "md" | "lg";
}) {
	const parsedName = parseItemNameFull(name);
	return (
		<>
			{parsedName.map((name, i) => (
				<p
					className={clsx({
						"text-xs": i === 0,
						"text-sm": variant === "sm",
						"text-base": variant === "md",
						"text-lg": variant === "lg",
					})}
					key={name}
				>
					{name}
				</p>
			))}
		</>
	);
}
