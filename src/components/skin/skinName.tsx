import clsx from "clsx";
import { parseItemNameExterior } from "../../utils/crate/parseItemName";

export function SkinName({
	name,
	variant = "sm",
}: {
	name: string;
	variant?: "sm" | "md" | "lg";
}) {
	const parsedName = parseItemNameExterior(name);
	return (
		<>
			{parsedName.map(name => (
				<p
					className={clsx({
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
