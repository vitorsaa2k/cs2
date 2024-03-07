import { useEffect, useState } from "react";
import { socket } from "../../../libs/socketIo";
import { PiRss } from "react-icons/pi";
import { IconContext } from "react-icons";

export function PlayersOnline() {
	const [onlineUsers, setOnlineUsers] = useState<string[]>([]);

	useEffect(() => {
		socket.on("usercount", users => setOnlineUsers(users));
		setInterval(() => {
			socket.emit("sendOnlineUser");
		}, 3000);
	}, []);

	return (
		<div className="flex">
			<IconContext.Provider value={{ className: "fill-[#46B858]", size: "24" }}>
				<PiRss />
			</IconContext.Provider>
			<p>{onlineUsers.length ?? 0} Online</p>
		</div>
	);
}
