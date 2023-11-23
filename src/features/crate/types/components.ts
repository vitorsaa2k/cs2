import { HTMLAttributes } from "react";
import { CrateSkin } from "./api";

export type RollerInsideProps = HTMLAttributes<HTMLDivElement> & {
	items: CrateSkin[];
	isRolling: boolean;
}