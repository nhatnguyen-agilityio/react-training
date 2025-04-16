import { useState } from "react";
import MyButton from "./Button";

const Products = () => {
  const products = [
    { title: "Product 1", id: 1 },
    { title: "Product 2", id: 2 },
    { title: "Product 3", id: 3 },
  ]

  const [count, setCount] = useState(0);
  
  function handleClick() {
    setCount(count + 1);
  }

  const listItems = products.map(product =>
    <li key={product.id}>{product.title}</li>
  );

  return (
    <div>
      <h1>Products</h1>
      <ul>{listItems}</ul>
      <MyButton count={count} event={handleClick} />
      <MyButton count={count} event={handleClick}/>
    </div>
  );
}
export default Products;