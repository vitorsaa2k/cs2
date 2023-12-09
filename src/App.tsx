import { AppRoutes } from "./routes/appRoutes";
import "./index.css";
import "react-loading-skeleton/dist/skeleton.css";
import { Layout } from "./components/layout";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./libs/queryClient";

function App() {
	const lastUrl = localStorage.getItem("lastUrl");
	if (lastUrl) {
		window.location.href = lastUrl;
		localStorage.removeItem("lastUrl");
	} else {
		return (
			<QueryClientProvider client={queryClient}>
				<Layout>
					<AppRoutes />
				</Layout>
			</QueryClientProvider>
		);
	}
}
export default App;
