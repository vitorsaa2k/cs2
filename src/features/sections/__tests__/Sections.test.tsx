import { describe, expect, test } from "vitest";
import { screen } from "@testing-library/react";
import { Sections } from "../index";
import { renderWithClient } from "../../../tests/utils";
import { sectionMock } from "@/tests/mocks/sectionMock";

describe("Sections", () => {
	test("renders loading spinner initially", () => {
		renderWithClient(<Sections />);
		expect(screen.getByTestId("tail-spin-loading")).toBeInTheDocument();
	});

	test("component can be rendered without crashing", () => {
		expect(() => renderWithClient(<Sections />)).not.toThrow();
	});

	test("renders sections with correct data", async () => {
		const result = renderWithClient(<Sections />);
		expect(await result.findByText(sectionMock[0].name)).toBeInTheDocument();
		expect(
			await result.findByText(sectionMock[0].crates[0].name),
		).toBeInTheDocument();
		expect((await result.findAllByRole("link"))[0]).toHaveAttribute(
			"href",
			`/crate/${sectionMock[0].crates[0].name}?crateId=${sectionMock[0].crates[0].crateId}`,
		);
	});
});
