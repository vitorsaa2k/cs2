import { HTMLAttributes } from "react";

export type RollerInsideProps = HTMLAttributes<HTMLDivElement> & {
	items: string[];
	isRolling: boolean;
}