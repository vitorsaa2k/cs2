export function UserImage({ src }: { src: string }) {
	return (
		<div className="bg-slate-800 p-3 rounded-full">
			<img className="rounded-full max-w-[108px]" src={src} />
		</div>
	);
}
