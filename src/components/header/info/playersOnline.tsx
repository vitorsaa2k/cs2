import { useEffect, useState } from "react";
import { socket } from "../../../libs/socketIo";

export function PlayersOnline() {
	const [onlineUsers, setOnlineUsers] = useState<string[]>([]);

	useEffect(() => {
		socket.on("usercount", users => setOnlineUsers(users));
	}, [onlineUsers]);

	return <p>{onlineUsers.length ?? 0} Online</p>;
}
