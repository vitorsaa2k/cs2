import { expect, test } from "vitest";
import { renderWithClient } from "./utils";
import { UserHeader } from "../components/header/mainHeader/userHeader";
import { userMock } from "./mocks/userMock";

test("renders user info correctly on header", () => {
	const result = renderWithClient(<UserHeader user={userMock} />);
	expect(result.getByRole("button", { name: /Log Out/i })).toBeInTheDocument();
	expect(result.getByText(`Balance: $${userMock.balance}`)).toBeInTheDocument();
});
