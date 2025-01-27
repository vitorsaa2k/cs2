import { expect, test } from "vitest";
import { renderWithClient } from "./utils";
import { UserHeader } from "../components/header/mainHeader/userHeader";
import { userMock } from "./mocks/userMock";
import { MainHeader } from "../components/header/mainHeader";
import { waitFor } from "@testing-library/react";
import { formatPrice } from "../utils/formatPrice";
import { UserBalance } from "../components/header/mainHeader/userBalance";

test("renders user info correctly on UserHeader", () => {
	const result = renderWithClient(<UserHeader user={userMock} />);
	const userBalance = renderWithClient(<UserBalance user={userMock} />);

	expect(result.getByLabelText("logout")).toBeInTheDocument();
	expect(
		userBalance.getByText(`${formatPrice(userMock.balance)}`)
	).toBeInTheDocument();
});

test("user hook", async () => {
	const result = renderWithClient(<MainHeader />);
	const element = await waitFor(() => result.findByLabelText("Deposit Button"));
	expect(element).toBeInTheDocument();
});
