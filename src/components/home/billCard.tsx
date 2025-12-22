import type { DataType } from "./Home";

type CardItem = { product: DataType };

export function Billcard(product: CardItem) {
	return (
		<div
			key={product.product.id}
			className="bg-[#1e3932] w-50 h-90 rounded-3xl flex flex-col items-center justify-center-safe gap-2"
		>
			<img src={product.product.img} alt={product.product.name} />
			<div className="flex flex-col self-start text-left pl-4">
				<span className="text-[#fefeff] font-bold">{product.product.name}</span>
				<span className="text-[#e9c9a2] font-bold text-xl">
					${product.product.price}
				</span>
				<span className="text-[#fefeff] font-bold">
					Qty : {product.product.quantity}
				</span>
			</div>
		</div>
	);
}
