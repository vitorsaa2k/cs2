import {
	ButtonHTMLAttributes,
	Dispatch,
	HTMLAttributes,
	SetStateAction,
} from "react";
import { SkinType } from "./api";

export type RollerInsideProps = HTMLAttributes<HTMLDivElement> & {
	items: SkinType[];
	isRolling: boolean;
	crateNumber?: number;
};

export type CrateInteractionProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	setCrateNumber: Dispatch<SetStateAction<number>>;
	crateNumber: number;
};

export type RollerProps = {
	items: SkinType[];
	isRolling: boolean;
};

export type VerticalRollerProps = {
	items: SkinType[][];
	isRolling: boolean;
	crateNumber: number;
};
