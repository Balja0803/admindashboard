import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useProductContext } from "../../util/ProductContext";
import axios from "axios";

export default function Pagination() {
  const { setProducts } = useProductContext();
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState();

  function handlePrev() {
    setPage((p) => {
      if (p === 1) return 1;
      return p - 1;
    });
  }

  function handleNext() {
    setPage((p) => {
      if (p === pageCount) return p;
      return p + 1;
    });
  }

  useEffect(() => {
    const getPage = async () => {
      const result = await axios.get(
        `http://localhost:2323/products?page=${page}`
      );
      if (result) {
        setPageCount(result.data.pages);
        setProducts(result.data.list);
      }
    };
    getPage();
  }, [page]);

  return (
    <div>
      <Button disabled={page === 1} onClick={handlePrev}>
        Prev
      </Button>
      <Button>{page}</Button>
      <Button disabled={page === pageCount - 1} onClick={handleNext}>
        Next
      </Button>
    </div>
  );
}
