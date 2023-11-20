import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { RedirectLogin } from "../pages/RedirectLogin";
import { Profile } from "../pages/Profile";
import { Layout } from "../components/layout";
import { Case } from "../pages/Case";

export function AppRoutes() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/user/:id?" element={<RedirectLogin />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/case/:id" element={<Case />} />
			</Routes>
		</Layout>
	);
}
