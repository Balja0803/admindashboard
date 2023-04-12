import moment from "moment";
import Table from "react-bootstrap/Table";
import Pagination from "./Pagination";
import { useProductContext } from "../../util/ProductContext";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export default function ProductRow() {
  const { products } = useProductContext();

  return (
    <div>
      <Table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>name</th>
            <th>price</th>
            <th>sale</th>
            <th>specs</th>
            <th>stock</th>
            <th>brand</th>
            <th>category</th>
            <th>added date</th>
            <th>description</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product, i) => (
              <tr key={i}>
                <td>
                  <img
                    alt="sample"
                    src={product.image[0]}
                    width={100}
                    height={100}
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.sale}</td>
                <td>
                  {product.specs.map((spec, i) => (
                    <p key={i}>
                      <strong>{spec.key}</strong>:{spec.value}
                    </p>
                  ))}
                </td>
                <td>{product.stock}</td>
                <td>{product.brand.name}</td>
                <td>{product.category.name}</td>
                <td>{moment(product.created_date).format("YYYY-MM-DD")}</td>
                <td>{product.description}</td>
                <td>
                  <h3>
                    <FaEdit />
                  </h3>
                </td>
                <td>
                  <h3>
                    <MdDeleteForever />
                  </h3>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Pagination />
    </div>
  );
}
