import { useContext, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import AuthContext from "../Context/AuthContext";
import axios from "axios";

export default function PopularProducts() {
  const authValue = useContext(AuthContext);
  const { notify, theme } = authValue;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("/data/products.json")
      .then((res) => setProducts(res?.data))
      .catch((err) => notify(`Error: ${err.message}...!!!`, "error"));
  }, [notify]);

  return (
    <div className="my-32">
      <div>
        <div className="text-center space-y-5">
          <h1 className="text-[#FF3811] font-bold text-xl">Popular Products</h1>
          <h1 className="font-bold text-5xl">Browse Our Products</h1>
          <h1 className="text-base text-[#737373] leading-8 max-w-[720px] mx-auto">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </h1>
        </div>

        <div className="grid max-[1310px]:grid-cols-2 max-[1750px]:grid-cols-3 min-[1750px]:grid-cols-4 justify-items-center gap-2 min-sm:gap-10 mt-12">
          {products?.map((product, index) => (
            <ProductCard product={product} key={index} theme={theme} />
          ))}
        </div>
      </div>
    </div>
  );
}
