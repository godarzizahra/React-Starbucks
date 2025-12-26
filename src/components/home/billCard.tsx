import type { DataType } from "./Home";

type CardItem = { product: DataType };

export function Billcard(product: CardItem) {
	return (
		<div
			key={product.product.id}
			className="bg-[#1e3932] w-full h-full rounded-3xl flex flex-col items-center justify-center-safe gap-2 py-5"
		>
			<img
				className="w-11/12"
				src={product.product.img}
				alt={product.product.name}
			/>
			<div className="flex flex-col self-start text-left pl-4 gap-2">
				<span className="text-[#fefeff] font-bold text-xl">
					{product.product.name}
				</span>

				<span className="text-[#e9c9a2] font-bold text-xl ">
					${product.product.price * product.product.quantity}
				</span>

				<span className="text-[#fefeff] font-bold text-xl">
					Qty : {product.product.quantity}
				</span>
			</div>
		</div>
	);
}
