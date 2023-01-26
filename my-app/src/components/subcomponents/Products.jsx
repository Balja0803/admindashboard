import "../../styles/products.css";
export default function Products(props) {
  console.log(props);
  const prod = props.product;
  return (
    <table style={{ border: "solid 1px", width: "100%", textAlign: "left" }}>
      <tr>
        <th>Product name</th>
        <th>Product price</th>
        <th>Product sale</th>
        <th>stock</th>
        <th>Id</th>
      </tr>
      {prod.map((item) => (
        <tr className="tr">
          <td>{item.name}</td>
          <td>{item.price}$</td>
          <td>{item.sales}</td>
          <td>{item.stock}</td>
          <td>{item.id}</td>
        </tr>
      ))}
    </table>
  );
}
