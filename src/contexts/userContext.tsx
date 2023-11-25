import { ReactNode, createContext, useEffect, useState } from "react";
import { UserType } from "../types/api";

const defaultValue: UserContextType = {
	user: {
		provider: "",
		_json: {
			steamid: "",
			communityvisibilitystate: 0,
			profilestate: 0,
			personaname: "",
			commentpermission: 0,
			profileurl: "",
			avatar: "",
			avatarmedium: "",
			avatarfull: "",
			avatarhash: "",
			lastlogoff: 0,
			personastate: 0,
			realname: "",
			primaryclanid: "",
			timecreated: 0,
			personastateflags: 0,
		},
		id: "",
		displayName: "",
		photos: [
			{
				value: "",
			},
			{
				value: "",
			},
			{
				value: "",
			},
		],
		identifier: "",
	},
	setUser: () => {},
};
type UserContextType = {
	user: UserType;
	setUser: (newUser: UserType) => void;
};

const UserContext = createContext<UserContextType>(defaultValue);

function UserContextProvider({ children }: { children: ReactNode }) {
	const [user, setContextUser] = useState(defaultValue.user);

	function setUser(newUser: UserType) {
		localStorage.setItem("user", JSON.stringify(newUser));
		setContextUser(newUser);
	}

	useEffect(() => {
		const localuser = localStorage.getItem("user");
		if (localuser) {
			setUser(JSON.parse(localuser));
		}
	}, []);
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
}

export { UserContext, UserContextProvider };
