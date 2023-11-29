import { decodeEntities } from "../decodeHTML";

export function parseItemNameFull(name: string) {
	const parsedName = decodeEntities(name).split("|");
	const index = parsedName[1].indexOf("(");
	if (parsedName[0][0] == "★") {
		parsedName[0] = parsedName[0].substring(2, parsedName[0].length);
	}
	parsedName[1] = parsedName[1].substring(0, index);
	return parsedName;
}

export function parseItemNameStar(name: string) {
	const parsedName = decodeEntities(name).split("|");
	if (parsedName[0][0] == "★") {
		parsedName[0] = parsedName[0].substring(2, parsedName[0].length);
	}
	return parsedName;
}

export function parseItemNameExterior(name: string) {
	const parsedName = decodeEntities(name).split("|");
	const index = parsedName[1].indexOf("(");
	parsedName.push(parsedName[1].substring(index, parsedName[1].length));
	if (parsedName[0][0] == "★") {
		parsedName[0] = parsedName[0].substring(2, parsedName[0].length);
	}
	parsedName[1] = parsedName[1].substring(0, index);
	return parsedName;
}
