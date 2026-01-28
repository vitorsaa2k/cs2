import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { CratePrice } from "../components/cratePrice";

describe("CratePrice", () => {
	test("renders price with correct formatting", () => {
		const price = 10.56;
		render(<CratePrice price={price} />);
		const priceElement = screen.getByText(`$${price.toFixed(2)}`);
		expect(priceElement).toBeInTheDocument();
	});
});
