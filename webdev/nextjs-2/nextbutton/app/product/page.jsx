import ProductButoon from "./ProductButoon";

async function productslist() {
  const resposne = await fetch("https://dummyjson.com/products");
  const res = await resposne.json();
  return res.products;
}

export default async function Products() {
  let data = await productslist();
  // console.log("data", data);
  return (
    <div>
      <p>Products</p>
      {data &&
        data.map((el) => {
          return (
            <div key={el.id}>
              <p >{el.title}</p>
              <ProductButoon price={el.price}/>
            </div>
          );
        })}
    </div>
  );
}
