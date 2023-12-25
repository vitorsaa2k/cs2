import { expect, test } from "vitest";
import { renderWithClient } from "../../../tests/utils";
import CrateDesc from "../components/crateDesc";
import { crateMock } from "../../../tests/mocks/crateMock";

test("renders crate items correctly", () => {
	const result = renderWithClient(<CrateDesc items={crateMock.skins} />);
	const usp = crateMock.skins[0];
	const uspPercentage = ((usp.maxRate - usp.minRate) / 10000).toFixed(2);
	const ak = crateMock.skins[1];
	const akPercentage = ((ak.maxRate - ak.minRate) / 10000).toFixed(2);
	expect(result.getByText(`${uspPercentage}%`)).toBeInTheDocument();
	expect(result.getByText(`${akPercentage}%`)).toBeInTheDocument();
});
