import React, { useState, useEffect } from "react";
import Product from "../components/Product";

import axios from "axios";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const { data } = await axios.get("/api/products");
        setloading(false);
        setProducts(data);
      } catch (err) {
        setError(err.message);
        setloading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="">
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product, index) => (
            <Product product={product} index={index} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
