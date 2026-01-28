import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProductRow } from "../components/row";
import { sectionMock } from "@/tests/mocks/sectionMock";

describe("ProductRow", () => {
	test("renders section name", () => {
		render(<ProductRow section={sectionMock[0]} />);
		expect(screen.getByText(sectionMock[0].name)).toBeInTheDocument();
	});

	test("renders correct number of crates", () => {
		render(<ProductRow section={sectionMock[0]} />);
		const links = screen.getAllByRole("link");
		expect(links).toHaveLength(4); // 2 crates × 2 links each (container + name)
	});

	test("renders crate information", () => {
		render(<ProductRow section={sectionMock[0]} />);
		expect(screen.getByText(sectionMock[0].crates[0].name)).toBeInTheDocument();
		expect(screen.getByText(sectionMock[0].crates[1].name)).toBeInTheDocument();
		expect(
			screen.getByText(`$${sectionMock[0].crates[0].price}`),
		).toBeInTheDocument();
		expect(
			screen.getByText(`$${sectionMock[0].crates[1].price}`),
		).toBeInTheDocument();
	});
});
