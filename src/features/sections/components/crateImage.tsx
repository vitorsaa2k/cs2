export function CrateImage({ src }: { src: string }) {
	return (
		<img src={src} className="max-w-[164px] hover:cursor-pointer rounded"></img>
	);
}
