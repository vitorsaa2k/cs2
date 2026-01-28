import { render } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { userMock } from "./mocks/userMock";
import { crateMock } from "./mocks/crateMock";
import { sectionMock } from "./mocks/sectionMock";

export const handlers = [
	http.get("http://localhost:3001/user", () => {
		return HttpResponse.json(userMock);
	}),
	http.get("http://localhost:3001/crate/1", () => {
		return HttpResponse.json(crateMock);
	}),
	http.post("http://localhost:3001/crate/open/1", () => {
		return HttpResponse.json([crateMock.skins[0]]);
	}),
	http.get("http://localhost:3001/sections", () => {
		return HttpResponse.json(sectionMock);
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
		<QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>,
	);
	return {
		...result,
		rerender: (rerenderUi: React.ReactElement) =>
			rerender(
				<QueryClientProvider client={testQueryClient}>
					{rerenderUi}
				</QueryClientProvider>,
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
