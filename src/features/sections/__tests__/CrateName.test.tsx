import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { CrateName } from "../components/crateName";
import { sectionMock } from "@/tests/mocks/sectionMock";

describe("CrateName", () => {
	test("renders name text correctly", () => {
		render(
			<CrateName
				name={sectionMock[0].crates[0].name}
				crateId={sectionMock[0].crates[0].crateId}
			/>,
		);
		const link = screen.getByRole("link");
		expect(link).toHaveTextContent(sectionMock[0].crates[0].name);
	});

	test("generates correct href with crateId and name", () => {
		render(
			<CrateName
				name={sectionMock[0].crates[0].name}
				crateId={sectionMock[0].crates[0].crateId}
			/>,
		);
		const link = screen.getByRole("link");
		expect(link).toHaveAttribute(
			"href",
			`/crate/${sectionMock[0].crates[0].name}?crateId=${sectionMock[0].crates[0].crateId}`,
		);
	});
});
