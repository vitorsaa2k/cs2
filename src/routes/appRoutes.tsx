import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { Crate } from "../pages/Crate";
import { Dashboard } from "../pages/Dashboard";

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="/crate/:name" element={<Crate />} />
			<Route path="/dashboard" element={<Dashboard />} />
		</Routes>
	);
}
