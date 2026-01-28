import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { CrateImage } from "../components/crateImage";
import { sectionMock } from "@/tests/mocks/sectionMock";

describe("CrateImage", () => {
	test("renders image with correct src", () => {
		render(<CrateImage src={sectionMock[0].crates[0].img} />);
		const img = screen.getByRole("img");
		expect(img).toHaveAttribute("src", sectionMock[0].crates[0].img);
	});
});
