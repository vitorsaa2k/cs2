import { animated, useTransition } from "@react-spring/web";
import { Drop } from "./singleDrop";
import { LiveDropItem } from "../../../features/crate/types/api";
import { useState } from "react";

export function DropsRow({ items }: { items: LiveDropItem[] }) {
	const [shouldShow, setShouldShow] = useState(false);
	const width = 128;
	const transitions = useTransition(
		items.map((data, i) => ({ ...data, x: i * width })),
		{
			from: { x: -128, position: "absolute", opacity: 0 },
			leave: { width: 0, opacity: 0 },
			enter: ({ x }) => ({ x, opacity: 1 }),
			update: ({ x }) => ({ x }),
			key: (item: LiveDropItem) => item?.rollId,
		}
	);
	setTimeout(() => {
		setShouldShow(true);
	}, 800);
	return (
		<>
			{transitions(({ x, ...rest }, item, { key }) => (
				<animated.div
					key={key}
					className={`overflow-hidden ${shouldShow ? "block" : "hidden"}`}
					// @ts-expect-error known error for useTransition/useSpring, reference: https://github.com/pmndrs/react-spring/issues/1102
					style={{
						transform: x.to((x: number) => `translate3d(${x}px,0,0)`),
						...rest,
					}}
				>
					<Drop item={item} />
				</animated.div>
			))}
		</>
	);
}
