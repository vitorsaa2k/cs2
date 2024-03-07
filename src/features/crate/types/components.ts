import { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { CrateSkin } from "./api";

export type RollerInsideProps = HTMLAttributes<HTMLDivElement> & {
	items: CrateSkin[];
	crateNumber?: number;
};

export type CrateInteractionProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type RollerProps = {
	items: CrateSkin[];
};

export type VerticalRollerProps = {
	items: CrateSkin[][];
	crateNumber: number;
};
