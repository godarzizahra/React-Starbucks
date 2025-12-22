type buttonType = {
	childern: React.ReactNode;
	className?: string;
	onclick?: () => void;
};

export default function Button({
	onclick,
	childern,
	className,
	...rest
}: buttonType) {
	return (
		<div>
			<button
				className={`   bg-[#e9c9a2] w-7 p-1 ${className ?? ""}`}
				{...rest}
				onClick={onclick}
			>
				{childern}
			</button>
		</div>
	);
}
