import { ProductInfo } from "./productInfo";

export function ProductRow() {
	const images = [
		"https://key-drop.com/cdn-cgi/image/format=auto,width=270,dpr=1/uploads/skins/TEMPTRESS.png",
		"https://key-drop.com/cdn-cgi/image/format=auto,width=270,dpr=1/uploads/skins/DIABLO.png",
		"https://key-drop.com/cdn-cgi/image/format=auto,width=270,dpr=1/uploads/skins/TOXIC.png",
		"https://key-drop.com/cdn-cgi/image/format=auto,width=270,dpr=1/uploads/skins/VISION.png",
		"https://key-drop.com/cdn-cgi/image/format=auto,width=270,dpr=1/uploads/skins/PIKA_PIKA.png",
		"https://key-drop.com/cdn-cgi/image/format=auto,width=270,dpr=1/uploads/skins/BEAST.png",
		"https://key-drop.com/cdn-cgi/image/format=auto,width=270,dpr=1/uploads/skins/RAZOR.png",
	];
	return (
		<div className="m-4 flex flex-col gap-4">
			<p>Row 1</p>
			<div className="flex gap-3">
				<ProductInfo src={images[0]} name="temptress" price="90" />
				<ProductInfo src={images[1]} name="Gloves" price="90" />
				<ProductInfo src={images[2]} name="test" price="90" />
				<ProductInfo src={images[3]} name="test" price="90" />
				<ProductInfo src={images[4]} name="test" price="90" />
				<ProductInfo src={images[5]} name="test" price="90" />
				<ProductInfo src={images[6]} name="test" price="90" />
			</div>
		</div>
	);
}
