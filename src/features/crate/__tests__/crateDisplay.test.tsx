import { beforeAll, describe, expect, test, vi } from "vitest";
import { renderWithClient } from "../../../tests/utils";
import { Crate } from "../../../pages/Crate";
import { waitFor } from "@testing-library/react";
import { crateMock } from "../../../tests/mocks/crateMock";

beforeAll(() => {
	vi.mock("react-router-dom", () => ({
		...vi.importActual("react-router-dom"),
		useParams: () => ({
			name: "testCrate",
		}),
	}));
});

describe("display crate components correctly", async () => {
	test("crate display via useQuery hook", async () => {
		const result = renderWithClient(<Crate />);
		const element = await waitFor(() => result.findByText(`${crateMock.name}`));
		expect(element).toBeInTheDocument();
		result.debug();
	});
});
