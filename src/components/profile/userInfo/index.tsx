import { UserImage } from "./userImage";
import { useGetUser } from "../../../hooks/useQuery";

export function UserInfo() {
	const { data: user } = useGetUser();
	return (
		<section className="border m-6 flex">
			{user ? (
				<>
					<UserImage src={user.photos[2].value} />
					<div className="flex items-center">
						<div>Username: {user?.displayName}</div>
					</div>
				</>
			) : null}
		</section>
	);
}
