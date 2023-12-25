import { beforeAll, describe, expect, test, vi } from "vitest";
import { renderWithClient } from "../../../tests/utils";
import { Crate } from "../../../pages/Crate";
import { waitFor } from "@testing-library/react";
import { crateMock } from "../../../tests/mocks/crateMock";

beforeAll(() => {
	vi.mock("react-router-dom", () => ({
		...vi.importActual("react-router-dom"),
		useParams: () => ({
			name: crateMock.name,
		}),
	}));
});

describe("display crate components", async () => {
	test("display the correct crate name", async () => {
		const result = renderWithClient(<Crate />);
		const element = await waitFor(() => result.findByText(`${crateMock.name}`));
		expect(element).toBeInTheDocument();
	});

	test("display the roller container", async () => {
		const result = renderWithClient(<Crate />);
		const element = await waitFor(() => result.findByText("AK-47"));
		expect(element).toBeInTheDocument();
	});

	test("display the right number of items on crate desc", async () => {
		const result = renderWithClient(<Crate />);
		const element = await waitFor(() =>
			result.findAllByLabelText("Crate item")
		);
		expect(element).toHaveLength(crateMock.skins.length);
	});
});