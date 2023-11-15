import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { RedirectLogin } from "../pages/RedirectLogin";
import { Profile } from "../pages/Profile";

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/user/:id?" element={<RedirectLogin />} />
			<Route path="/profile" element={<Profile />} />
		</Routes>
	);
}
