import { useNavigate } from "react-router-dom";

export function Logo() {
	const navigate = useNavigate();
	return <div onClick={() => navigate("/")}>Skins Mania Logo</div>;
}
