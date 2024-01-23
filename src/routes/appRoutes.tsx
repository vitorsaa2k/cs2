import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { Crate } from "../pages/Crate";
import { Dashboard } from "../pages/Dashboard";
import { ProvablyFair } from "../pages/ProvablyFair";
import { PublicProfile } from "../pages/PublicProfile";
import { Upgrade } from "../pages/Upgrade";

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="/profile/:id" element={<PublicProfile />} />
			<Route path="/crate/:name" element={<Crate />} />
			<Route path="/provablyfair" element={<ProvablyFair />} />
			<Route path="/upgrade" element={<Upgrade />} />
			<Route path="/dashboard" element={<Dashboard />} />
		</Routes>
	);
}
