import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Profile = lazy(() => import("../pages/Profile"));
const PublicProfile = lazy(() => import("../pages/PublicProfile"));
const Crate = lazy(() => import("../pages/Crate"));
const ProvablyFair = lazy(() => import("../pages/ProvablyFair"));
const Upgrade = lazy(() => import("../pages/Upgrade"));
export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="/profile/:id" element={<PublicProfile />} />
			<Route path="/crate/:name" element={<Crate />} />
			<Route path="/provablyfair" element={<ProvablyFair />} />
			<Route path="/upgrade" element={<Upgrade />} />
		</Routes>
	);
}
