import { Billcard } from "./billCard";
import { type DataType } from "./Home";
import { Productcard } from "./productCard";

export type Props = {
	products: DataType[];
	plusProduct: (id: number) => void;
	minusProduct: (id: number) => void;
};

export function Menuproducts({ products, plusProduct, minusProduct }: Props) {
	return (
		<div className="flex flex-col text-center w-full max-w-[92%] md:max-w-[85%] lg:max-w-[80%] mx-auto gap-6 md:gap-8">
			<h2 className="font-bold text-lg sm:text-2xl md:text-3xl text-[#1e3932]">
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

			<h2 className="font-bold text-lg sm:text-2xl md:text-3xl text-[#1e3932]">
				Bill
			</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
				{products.map((product) => (
					<Billcard key={product.id} product={product} />
				))}
			</div>

			<span className="font-bold text-lg sm:text-2xl md:text-4xl text-[#1e3932]">
				Total: $
			</span>

			<button className="bg-[#e9c9a2] text-[#fefeff] text-lg sm:text-xl md:text-2xl w-full py-3 md:py-4 rounded-2xl">
				Submit Order
			</button>
		</div>
	);
}
