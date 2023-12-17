import { io } from "socket.io-client";
import { URL } from "./axios";
const socket = io(URL, {
	withCredentials: true,
});

export { socket };
