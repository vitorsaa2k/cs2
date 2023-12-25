import { expect, test } from "vitest";
import { renderWithClient } from "./utils";
import { UserHeader } from "../components/header/mainHeader/userHeader";
import { userMock } from "./mocks/userMock";
import { MainHeader } from "../components/header/mainHeader";
import { waitFor } from "@testing-library/react";

test("renders user info correctly on UserHeader", () => {
	const result = renderWithClient(<UserHeader user={userMock} />);

	expect(result.getByRole("button", { name: /Log Out/i })).toBeInTheDocument();
	expect(result.getByText(`Balance: $${userMock.balance}`)).toBeInTheDocument();
});

test("user hook", async () => {
	const result = renderWithClient(<MainHeader />);
	const element = await waitFor(() =>
		result.findByRole("button", { name: /deposit/i })
	);
	expect(element).toBeInTheDocument();
});
