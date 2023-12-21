import { UserImage } from "./userImage";
import { useGetUserById } from "../../../hooks/useQuery";
import { useParams } from "react-router-dom";

export function UserInfo() {
	const { id } = useParams();
	const { data: user, isLoading } = useGetUserById(id ?? "");
	return (
		<section className="border min-w-[840px] p-12 rounded m-6 flex">
			{isLoading ? null : (
				<>
					{user ? (
						<>
							<UserImage src={user.photos[2].value} />
							<div className="flex w-full border p-2 m-4 rounded flex-col items-start">
								<p className="text-xl">{user?.displayName}</p>
							</div>
						</>
					) : (
						<div className="w-screen h-screen flex justify-center items-center">
							<p className="text-9xl">This User Does Not Exists</p>
						</div>
					)}
				</>
			)}
		</section>
	);
}
