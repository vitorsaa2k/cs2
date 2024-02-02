import { decodeEntities } from "../decodeHTML";

export function parseItemNameFull(name: string) {
	const parsedName = decodeEntities(name).split("|");
	const index = parsedName[1]?.indexOf("(");
	if (!index) {
		return parsedName;
	}
	if (parsedName[0][0] == "★") {
		parsedName[0] = parsedName[0].substring(2, parsedName[0].length);
	}
	if (parsedName[0].includes("StatTrak™")) {
		const endIndex = parsedName[0]?.indexOf("™");
		parsedName[0] = parsedName[0].substring(
			endIndex + 2,
			parsedName[0].length - 1
		);
	}
	parsedName[1] = parsedName[1].substring(0 + 1, index - 1);
	if (parsedName[1].length > 15) {
		parsedName[1] = parsedName[1].substring(0, 15);
		parsedName[1] = parsedName[1] + "...";
	}
	return parsedName;
}

export function parseItemNameExterior(name: string) {
	const skin = {
		name: decodeEntities(name),
		isStatTrak: false,
		exterior: "Factory New",
	};
	if (skin.name.includes("StatTrak™")) skin.isStatTrak = true;

	const index = skin.name?.indexOf("(");
	if (!index) return skin;
	skin.exterior = skin.name.substring(index + 1, skin.name.length - 1);

	return skin;
}
