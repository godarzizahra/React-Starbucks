import { useState } from "react";
import { initialData } from "../../utils/data";
import { Header } from "./header";
import { Menuproducts } from "./menuProducts";

export type DataType = {
	id: number;
	name: string;
	img: string;
	price: number;
	quantity: number;
};

export function Home() {
	const [products, setProducts] = useState(initialData);

	const plusProduct = (id: number) => {
		setProducts((prev) =>
			prev.map((item) =>
				item.id === id ? { ...item, quantity: item.quantity + 1 } : item
			)
		);
	};

	const minusProduct = (id: number) => {
		setProducts((prev) =>
			prev.map((item) =>
				item.id === id && item.quantity > 0
					? { ...item, quantity: item.quantity - 1 }
					: item
			)
		);
	};
	return (
		<div>
			<Header />
			<Menuproducts
				products={products}
				plusProduct={plusProduct}
				minusProduct={minusProduct}
			/>
		</div>
	);
}
