import Button from "../shared/button";
import type { DataType } from "./Home";

type CardItemProps = {
	product: DataType;
	plusProduct: (id: number) => void;
	minusProduct: (id: number) => void;
};
export function Productcard({
	product,
	plusProduct,
	minusProduct,
}: CardItemProps) {
	return (
		<div
			key={product.id}
			className="bg-[#1e3932] w-50 h-90 rounded-3xl flex flex-col items-center justify-center-safe gap-2"
		>
			<img src={product.img} alt={product.name} />
			<div className="flex flex-col self-start text-left pl-4">
				<span className="text-[#fefeff] font-bold">{product.name}</span>
				<span className="text-[#e9c9a2] font-bold text-xl">
					${product.price}
				</span>
			</div>
			<div className="flex flex-row-reverse items-center text-center">
				<Button
					className=""
					childeren="+"
					onclick={() => plusProduct(product.id)}
				/>
				<span className="bg-[#fefeff] w-8 p-1">{product.quantity}</span>
				<Button
					className=""
					childeren="-"
					onclick={() => minusProduct(product.id)}
				/>
			</div>
		</div>
	);
}
