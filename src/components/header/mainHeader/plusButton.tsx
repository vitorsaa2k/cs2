export function PlusButton() {
	return (
		<div className="relative">
			<svg
				width="28"
				height="28"
				viewBox="0 0 28 28"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12 1.1547C13.2376 0.440169 14.7624 0.440169 16 1.1547L24.1244 5.8453C25.362 6.55983 26.1244 7.88034 26.1244 9.3094V18.6906C26.1244 20.1197 25.362 21.4402 24.1244 22.1547L16 26.8453C14.7624 27.5598 13.2376 27.5598 12 26.8453L3.87564 22.1547C2.63804 21.4402 1.87564 20.1197 1.87564 18.6906V9.3094C1.87564 7.88034 2.63804 6.55983 3.87564 5.8453L12 1.1547Z"
					fill="#46B858"
				/>
			</svg>
			<div className="absolute w-full h-full flex justify-center items-center top-0 ">
				<svg
					width="18"
					height="18"
					viewBox="0 0 18 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M16.0312 9C16.0312 9.22378 15.9424 9.43839 15.7841 9.59662C15.6259 9.75485 15.4113 9.84375 15.1875 9.84375H9.84375V15.1875C9.84375 15.4113 9.75485 15.6259 9.59662 15.7841C9.43839 15.9424 9.22378 16.0312 9 16.0312C8.77622 16.0312 8.56161 15.9424 8.40338 15.7841C8.24514 15.6259 8.15625 15.4113 8.15625 15.1875V9.84375H2.8125C2.58872 9.84375 2.37411 9.75485 2.21588 9.59662C2.05764 9.43839 1.96875 9.22378 1.96875 9C1.96875 8.77622 2.05764 8.56161 2.21588 8.40338C2.37411 8.24514 2.58872 8.15625 2.8125 8.15625H8.15625V2.8125C8.15625 2.58872 8.24514 2.37411 8.40338 2.21588C8.56161 2.05764 8.77622 1.96875 9 1.96875C9.22378 1.96875 9.43839 2.05764 9.59662 2.21588C9.75485 2.37411 9.84375 2.58872 9.84375 2.8125V8.15625H15.1875C15.4113 8.15625 15.6259 8.24514 15.7841 8.40338C15.9424 8.56161 16.0312 8.77622 16.0312 9Z"
						fill="#1E293B"
					/>
				</svg>
			</div>
		</div>
	);
}