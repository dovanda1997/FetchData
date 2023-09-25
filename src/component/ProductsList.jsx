import React, { useEffect, useState } from "react";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    const getProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        console.log(data);
        if (!ignore) setProducts(data.products);
      } catch (error) {
        if (!ignore) setError(error);
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    getProducts();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <div className="productCart">
        <div className="gird">
          {products.map((product) => (
            <div key={product.id}>
              <div className="productCart-item">
                <div className="productCart-thumbnail">
                  <img src={product.thumbnail} alt={product.thumbnail} />
                </div>
                <div className="productCart-title">
                    <p>{product.title}</p>
                </div>
                <div className="productCart-price">
                    <p>${product.price}</p>
                </div>
                <div className="productCart-add">
                    <button className="btn"> Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsList;
