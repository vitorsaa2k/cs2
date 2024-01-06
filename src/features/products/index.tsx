import { useEffect, useState } from "react";
import { getAllSections } from "../../services/productsApi";
import { Section } from "../../types/api";
import { ProductRow } from "./components/row";

export function Products() {
	const [sections, setSections] = useState<Section[]>([]);
	async function loadSections() {
		const prods = await getAllSections();
		setSections(prods);
	}
	useEffect(() => {
		loadSections();
	}, []);
	return sections.map(section => {
		return <ProductRow key={section.name} section={section} />;
	});
}
