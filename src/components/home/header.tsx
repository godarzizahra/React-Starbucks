export function Header() {
	return (
		<div className="w-full my-3 flex justify-center items-center gap-2 md:gap-3">
			<img
				src="../../src/assets/images/logo.png"
				alt="Logo"
				className="w-8 sm:w-10 md:w-15"
			/>
			<h1 className="font-bold text-xl sm:text-2xl md:text-5xl">Starbucks</h1>
		</div>
	);
}
