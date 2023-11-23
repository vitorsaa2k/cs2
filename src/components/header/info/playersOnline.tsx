import { useState } from "react";
import { socket } from "../../../libs/socketIo";

export function PlayersOnline() {
	const [playersOnline, setPlayersOnline] = useState(0);

	socket.on("usercount", count => {
		setPlayersOnline(count);
	});

	return <p>{playersOnline} Online</p>;
}
