import { beforeAll, describe, expect, test, vi } from "vitest";
import { Roller } from "../components/roller";
import { crateMock } from "../../../tests/mocks/crateMock";
import userEvent from "@testing-library/user-event";
import { renderWithClient } from "../../../tests/utils";
import { server } from "../../../../setupTests";
import { HttpResponse, http } from "msw";
import { userMock } from "../../../tests/mocks/userMock";

beforeAll(() => {
	vi.mock("react-router-dom", () => ({
		...vi.importActual("react-router-dom"),
		useParams: () => ({
			name: crateMock.name,
		}),
	}));
});

describe("crate interaction buttons", async () => {
	test("click on PLUS button should switch to vertical items component", async () => {
		const result = renderWithClient(<Roller skins={crateMock.skins} />);
		const plusButton = result.getByRole("button", { name: /plus button/i });
		const horizontalRoller = result.getByLabelText("Roller container");
		await userEvent.click(plusButton);
		const verticalRoller = result.getByLabelText(/vertical roller container/i);
		expect(horizontalRoller).not.toBeInTheDocument();
		expect(verticalRoller).toBeInTheDocument();
	});

	test("click on PLUS button 4 times should show 5 items column", async () => {
		const result = renderWithClient(<Roller skins={crateMock.skins} />);
		const plusButton = result.getByRole("button", { name: /plus button/i });
		const horizontalRoller = result.getByLabelText(/roller container/i);
		await userEvent.click(plusButton);
		await userEvent.click(plusButton);
		await userEvent.click(plusButton);
		await userEvent.click(plusButton);
		const allItemsColumn = result.getAllByLabelText(/items column/i);
		expect(horizontalRoller).not.toBeInTheDocument();
		expect(allItemsColumn).toHaveLength(5);
	});

	test("click on PLUS button more than 4 times should show 5 items column", async () => {
		const result = renderWithClient(<Roller skins={crateMock.skins} />);
		const plusButton = result.getByRole("button", { name: /plus button/i });
		const horizontalRoller = result.getByLabelText(/roller container/i);
		await userEvent.click(plusButton);
		await userEvent.click(plusButton);
		await userEvent.click(plusButton);
		await userEvent.click(plusButton);
		await userEvent.click(plusButton);
		await userEvent.click(plusButton);
		await userEvent.click(plusButton);
		const allItemsColumn = result.getAllByLabelText(/items column/i);
		expect(horizontalRoller).not.toBeInTheDocument();
		expect(allItemsColumn).toHaveLength(5);
	});

	test("click on MINUS button 4 times or more should show HorizontalRoller", async () => {
		const result = renderWithClient(<Roller skins={crateMock.skins} />);
		const minusButton = result.getByRole("button", { name: /minus button/i });
		const plusButton = result.getByRole("button", { name: /plus button/i });
		await userEvent.click(plusButton);
		const verticalRoller = result.getByLabelText(/vertical roller container/i);
		await userEvent.click(minusButton);
		await userEvent.click(minusButton);
		await userEvent.click(minusButton);
		await userEvent.click(minusButton);
		const horizontalRoller = result.getByLabelText(/roller container/i);
		expect(horizontalRoller).toBeInTheDocument();
		expect(verticalRoller).not.toBeInTheDocument();
	});

	test("open crate button is a login button when user isn't logged in", async () => {
		server.use(
			http.get("http://localhost:3001/user", () => {
				return HttpResponse.error();
			})
		);
		const result = renderWithClient(<Roller skins={crateMock.skins} />);
		const button = result.getByRole("button", {
			name: "Login to open",
		});
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass("bg-red-800");
	});

	test("show remaining balance to open if user doesn't have enough balance", async () => {
		const result = renderWithClient(<Roller skins={crateMock.skins} />);
		const remainingToOpen = crateMock.price - userMock.balance;
		const button = await result.findByRole("button", {
			name: `Add to open $${remainingToOpen}`,
		});
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass("bg-red-800");
	});

	test("open crate button is disabled while opening case", async () => {
		const userWithBalance = userMock;
		userWithBalance.balance = 1000;
		server.use(
			http.get("http://localhost:3001/user", () => {
				return HttpResponse.json(userWithBalance);
			})
		);
		const result = renderWithClient(<Roller skins={crateMock.skins} />);
		const button = await result.findByRole("button", {
			name: `Open Case $${crateMock.price}`,
		});
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass("bg-green-800");
		await userEvent.click(button);
		expect(button).toBeDisabled();
	});
});