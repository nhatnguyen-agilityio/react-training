import ProductCategory from "./ProductCategory";
import ProductItem from "./ProductItem";
import ProductInterface from "../../../interfaces/product";
import { JSX } from "react";

interface ProductTableInterface {
  products: ProductInterface[]
}

const ProductTable = ({ products }: ProductTableInterface) => {
  const rows: JSX.Element[] = [];
  let lastCategory: string | null = null;
  products.forEach((item) => {
    if (item.category !== lastCategory) {
      rows.push(
        <ProductCategory category={item.category} key={item.category} />
      )
    }

    rows.push(
      <ProductItem
        product={item} key={item.name}
      />
    );

    lastCategory = item.category;
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}
export default ProductTable;