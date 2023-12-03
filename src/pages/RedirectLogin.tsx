import { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getUser } from "../services/userApi";
import { UserContext } from "../contexts/userContext";

export function RedirectLogin() {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const id = searchParams.get("userId");
	const user = useContext(UserContext);
	console.log();

	useEffect(() => {
		checkUserAndRedirect();
	});

	async function checkUserAndRedirect() {
		const req = await getUser(id!);
		user.setUser(await req.data);
		(await req.data).id
			? navigate("/")
			: navigate("/profile", { state: { user: req.data } });
	}

	return <div>Redirecting...</div>;
}
