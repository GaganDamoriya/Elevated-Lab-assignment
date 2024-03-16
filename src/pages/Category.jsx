import React, { useEffect, useState } from "react";
import "./category.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
const Category = () => {
  const { category } = useParams();
  const [currCategory, setCurrCategory] = useState([]);
  useEffect(() => {
    const getproducts = async () => {
      try {
        const res = await axios.get(
          `https://fakestoreapi.com/${
            category == "products"
              ? "products"
              : `products/category/${category}`
          }`
        );
        setCurrCategory(res.data);
      } catch (e) {
        console.log("error", e);
      }
    };
    getproducts();
  }, [category]);
  return (
    <div>
      <div className="category-heading">
        <h1>{category}</h1>
        <div className="display-products">
          {currCategory.length > 0
            ? currCategory.map((item, id) => {
                return (
                  <Card
                    key={id}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    rating={item.rating.rate}
                    count={item.rating.count}
                    category={item.category}
                    price={item.price}
                    classname="card"
                    id={item.id}
                    // onClick={() => navigate(`/product/${item.id}`)}
                  />
                );
              })
            : "Loading.."}
        </div>
      </div>
    </div>
  );
};

export default Category;
