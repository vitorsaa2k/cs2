import { HTMLAttributes } from "react";
import { SkinType } from "./api";

export type RollerInsideProps = HTMLAttributes<HTMLDivElement> & {
	items: SkinType[];
	isRolling: boolean;
};
