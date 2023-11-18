import { useState } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:3004");

export function PlayersOnline() {
	const [playersOnline, setPlayersOnline] = useState(0);

	socket.on("usercount", count => {
		setPlayersOnline(count);
	});

	return <p>{playersOnline} Online</p>;
}
