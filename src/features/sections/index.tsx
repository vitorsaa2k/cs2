import { ProductRow } from "./components/row";
import { useGetAllSections } from "../../hooks/useQuery/sections";
import { TailSpinner } from "../../components/spinner";

export function Sections() {
	const { data: sections, error } = useGetAllSections();
	if (error) return <pre>An error ocurred</pre>;
	if (!sections) return <TailSpinner height={30} width={30} visible />;

	return sections.map(section => {
		return <ProductRow key={section.name} section={section} />;
	});
}
