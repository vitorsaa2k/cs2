import { SVGProps } from "react";

interface TriangleSvgProps extends SVGProps<SVGSVGElement> {}

export function TriangleSvg(props: TriangleSvgProps) {
	return (
		<svg
			{...props}
			width="22"
			height="20"
			viewBox="0 0 22 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M7.5359 2C9.0755 -0.66667 12.9245 -0.666667 14.4641 2L21.3923 14C22.9319 16.6667 21.0074 20 17.9282 20H4.07179C0.992592 20 -0.931905 16.6667 0.607696 14L7.5359 2Z"
				fill="#CBD5E1"
			/>
		</svg>
	);
}
