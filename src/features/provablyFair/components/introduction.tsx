export function ProvablyFairIntroduction() {
	return (
		<section className="bg-slate-700 max-w-6xl p-5 m-7 rounded flex flex-col gap-2">
			<div className="flex flex-col">
				<h2 className="text-xl font-semibold">Provably Fair Algorithm</h2>
				<p>
					Welcome to Skins Mania, where fairness is our main focus. At Skins
					Mania, we believe in transparency and integrity in all our endeavors.
					That's why we embrace the concept of provably fair gaming, ensuring
					that every user can trust the outcomes of their experiences with us.
				</p>
			</div>

			<div className="flex flex-col gap-2 my-3">
				<h3 className="text-lg font-semibold">
					What is a provably fair algorithm?
				</h3>
				<p>
					Provably fair gaming refers to a method that ensures the legitimacy
					and fairness of each game's outcome. At its core, this system employs
					cryptographic techniques and algorithms that allow players to verify
					the fairness of a game independently.
				</p>
				<p>
					<strong>Here's how it works:</strong> When a game starts, a random
					seed is generated and shared with you. Simultaneously, another hidden
					seed is created by our system to determine the game's result. Once the
					game ends, this hidden seed is revealed, allowing you to confirm
					independently that the game was fair and not tampered with.
				</p>
				<p>
					You can read more about it{" "}
					<a
						rel="noopener noreferrer"
						target="_blank"
						href="https://www.provably.com"
						className="text-blue-600 hover:underline transition-colors hover:text-blue-500"
					>
						here.
					</a>
				</p>
			</div>
			<div>
				<h3 className="text-lg font-semibold">But, how do I check it?</h3>
				<p className="mt-2">You will have to:</p>
				<ol className="m-2">
					<li>
						1. Copy the JSON at the right of the page when checking a roll id.
					</li>
					<li>
						2. Go to{" "}
						<a
							rel="noopener noreferrer"
							target="_blank"
							href="https://provablyfair-skinsmania.vercel.app"
							className="text-blue-600 hover:underline transition-colors hover:text-blue-500"
						>
							this open source project.
						</a>
					</li>
					<li>
						3. Paste the JSON in the input and click on the "Check" button.
					</li>
					<li>4. Now you can be sure that we are honest!</li>
				</ol>
			</div>
		</section>
	);
}
