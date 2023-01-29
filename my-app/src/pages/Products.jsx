import "../styles/products.css";

export function Products(props) {
  const prod = props.product;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product name</th>
            <th>Product price</th>
            <th>Product sale</th>
            <th>stock</th>
            <th>Id</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {prod.map((item, index) => (
            <tr className="tr" key={index}>
              <td>{item.name}</td>
              <td>{item.price}$</td>
              <td>{item.sale}</td>
              <td>{item.stock}</td>
              <td>{item.id}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
