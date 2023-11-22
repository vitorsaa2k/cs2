import { HTMLAttributes } from "react";
import { CaseSkin } from "./api";

export type RollerInsideProps = HTMLAttributes<HTMLDivElement> & {
	items: CaseSkin[];
	isRolling: boolean;
}