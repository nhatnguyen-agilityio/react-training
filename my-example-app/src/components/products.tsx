const Products = () => {
  const products = [
    { title: "Product 1", id: 1 },
    { title: "Product 2", id: 2 },
    { title: "Product 3", id: 3 },
  ]

  const listItems = products.map(product =>
    <li key={product.id}>{product.title}</li>
  );

  return (
    <>
      <h1>Products</h1>
      <ul>{listItems}</ul>
    </>
  );
}
export default Products;