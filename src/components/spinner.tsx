import { TailSpin } from "react-loader-spinner";

export function TailSpinner({
	height,
	visible,
	width,
}: {
	height: number;
	width: number;
	visible: boolean;
}) {
	return (
		<TailSpin color="#FFF" height={height} width={width} visible={visible} />
	);
}
