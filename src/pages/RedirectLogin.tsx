import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUser } from "../services/userApi";

export function RedirectLogin() {
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		checkUserAndRedirect();
	});

	async function checkUserAndRedirect() {
		const req = await getUser(id!);
		req.data.error
			? navigate("/")
			: navigate("/profile", { state: { user: req.data } });
	}

	return <div>Redirecting...</div>;
}
