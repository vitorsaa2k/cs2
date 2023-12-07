import { DashboardContextProvider } from "../contexts/dashboardContext";
import { FullDashboard } from "../features/dashboard";

export function Dashboard() {
	return (
		<DashboardContextProvider>
			<section>
				<FullDashboard />
			</section>
		</DashboardContextProvider>
	);
}
