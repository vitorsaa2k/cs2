import {
	ButtonHTMLAttributes,
	Dispatch,
	HTMLAttributes,
	SetStateAction,
} from "react";
import { CrateSkin } from "./api";

export type RollerInsideProps = HTMLAttributes<HTMLDivElement> & {
	items: CrateSkin[];
	isRolling: boolean;
	crateNumber?: number;
};

export type CrateInteractionProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	setCrateNumber: Dispatch<SetStateAction<number>>;
	crateNumber: number;
};

export type RollerProps = {
	items: CrateSkin[];
	isRolling: boolean;
};

export type VerticalRollerProps = {
	items: CrateSkin[][];
	isRolling: boolean;
	crateNumber: number;
};
