import { Billcard } from "./billCard";
import { type DataType } from "./Home";
import { Productcard } from "./productCard";

export type Props = {
	products: DataType[];
	plusProduct: (id: number) => void;
	minusProduct: (id: number) => void;
	resetProducts: () => void;
};

export function Menuproducts({
	products,
	plusProduct,
	minusProduct,
	resetProducts,
}: Props) {
	const selectedProducts = products.filter((product) => product.quantity > 0);

	const totalPrice = selectedProducts.reduce(
		(sum, product) => sum + product.price * product.quantity,
		0
	);
	const isOrderEmpty = selectedProducts.length === 0;

	const handleSubmit = () => {
		if (isOrderEmpty) return;

		alert("سفارش شما ثبت شد ✅");
		resetProducts();
	};

	return (
		<div className="flex flex-col text-center w-full max-w-[92%] md:max-w-[85%] lg:max-w-[80%] mx-auto gap-6 md:gap-8 pb-2">
			<h2 className="font-bold text-2xl sm:text-3xl md:text-3xl text-[#1e3932]">
				Starbucks Online Coffee Order
			</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
				{products.map((product) => (
					<Productcard
						key={product.id}
						product={product}
						plusProduct={plusProduct}
						minusProduct={minusProduct}
					/>
				))}
			</div>

			<h2 className="font-bold text-2xl sm:text-3xl md:text-3xl text-[#1e3932]">
				Bill
			</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
				{products.map((product) => (
					<Billcard key={product.id} product={product} />
				))}
			</div>

			<span className=" text-lg sm:text-2xl md:text-4xl text-[#1e3932]">
				Total: ${totalPrice}
			</span>

			<button
				onClick={handleSubmit}
				disabled={isOrderEmpty}
				className={`text-lg sm:text-xl md:text-2xl w-full py-3 md:py-4 rounded-2xl
		${
			isOrderEmpty
				? "bg-gray-300 text-gray-500 cursor-not-allowed"
				: "bg-[#e9c9a2] text-[#fefeff]"
		}`}
			>
				Submit Order
			</button>
		</div>
	);
}
