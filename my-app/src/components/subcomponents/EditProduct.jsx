import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function EditProduct({ product }, { handleClose }, { showEdit }) {
  const show = showEdit;

  return (
    // <div>
    //   <form
    //     style={{ width: "100%", height: "30px", display: "flex", gap: "10px" }}
    //   >
    //     <label> Product name: </label>
    //     <input defaultValue={product.name} />
    //     <label> Product price: </label>
    //     <input defaultValue={product.price} />
    //     <label> Product sale: </label>
    //     <input defaultValue={product.sale} />
    //     <label>Stock: </label>
    //     <input defaultValue={product.stock} />
    //     <label>Id: </label>
    //     <input defaultValue={product.id} disabled />
    //     <label>Category: </label>
    //     <input defaultValue={product.category} />
    //     <button>Save :</button>
    //   </form>
    // </div>
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Edit</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <form>
          <label>Product name</label>
          <input defaultValue={product.name} />
          <label>Product price</label>
          <input defaultValue={product.price} />
        </form>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
export default EditProduct;
