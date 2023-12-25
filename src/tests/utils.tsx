import { render } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { userMock } from "./mocks/userMock";
import { crateMock } from "./mocks/crateMock";

export const handlers = [
	http.get("http://localhost:3001/user", () => {
		return HttpResponse.json(userMock);
	}),
	http.get("http://localhost:3001/crate/testCrate", () => {
		return HttpResponse.json(crateMock);
	}),
	http.post("http://localhost:3001/crate/open/testCrate", () => {
		return HttpResponse.json([crateMock.skins[0]]);
	}),
];

const createTestQueryClient = () =>
	new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
			},
		},
	});

export function renderWithClient(ui: React.ReactElement) {
	const testQueryClient = createTestQueryClient();
	const { rerender, ...result } = render(
		<QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
	);
	return {
		...result,
		rerender: (rerenderUi: React.ReactElement) =>
			rerender(
				<QueryClientProvider client={testQueryClient}>
					{rerenderUi}
				</QueryClientProvider>
			),
	};
}

export function createWrapper() {
	const testQueryClient = createTestQueryClient();
	return ({ children }: { children: React.ReactNode }) => (
		<QueryClientProvider client={testQueryClient}>
			{children}
		</QueryClientProvider>
	);
}
