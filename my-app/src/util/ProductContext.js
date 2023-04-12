import { createContext, useContext, useState } from "react";

const AllProductContext = createContext();

export const useProductContext = () => {
  return useContext(AllProductContext);
};

export default function ProductContext({ children }) {
  const [products, setProducts] = useState();

  return (
    <AllProductContext.Provider value={{ products, setProducts }}>
      {children}
    </AllProductContext.Provider>
  );
}
