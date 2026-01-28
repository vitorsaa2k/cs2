import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { CrateInfo } from "../components/crateInfo";
import { sectionMock } from "@/tests/mocks/sectionMock";

describe("CrateInfo", () => {
	test("renders all child components", () => {
		render(
			<CrateInfo
				crateId={sectionMock[0].crates[0].crateId}
				name={sectionMock[0].crates[0].name}
				price={sectionMock[0].crates[0].price}
				src={sectionMock[0].crates[0].img}
			/>,
		);

		expect(screen.getByRole("img")).toHaveAttribute(
			"src",
			sectionMock[0].crates[0].img,
		);
		expect(screen.getByText(sectionMock[0].crates[0].name)).toBeInTheDocument();
		expect(
			screen.getByText(`$${sectionMock[0].crates[0].price}`),
		).toBeInTheDocument();
	});

	test("generates correct href on container link", () => {
		render(
			<CrateInfo
				crateId={sectionMock[0].crates[0].crateId}
				name={sectionMock[0].crates[0].name}
				price={sectionMock[0].crates[0].price}
				src={sectionMock[0].crates[0].img}
			/>,
		);

		const links = screen.getAllByRole("link");
		expect(links).toHaveLength(2);
		expect(links[0]).toHaveAttribute(
			"href",
			`/crate/${sectionMock[0].crates[0].name}?crateId=${sectionMock[0].crates[0].crateId}`,
		);
	});
});
