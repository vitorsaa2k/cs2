import { useEffect, useState } from "react";
import { socket } from "../../../libs/socketIo";

export function PlayersOnline() {
	const [playersOnline, setPlayersOnline] = useState(0);

	useEffect(() => {
		socket.on("usercount", count => {
			setPlayersOnline(count);
		});
	}, [socket]);

	return <p>{playersOnline} Online</p>;
}
