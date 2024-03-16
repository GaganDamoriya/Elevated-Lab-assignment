import React, { useEffect, useState } from "react";
import bgImage from "../assets/sal3new.jpg";
import "./Dashboard.css";
import NavHeader from "../components/NavHeader";
import { Outlet } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const getCategory = async () => {
      const res = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setCategory(res.data);
    };
    getCategory();
  }, []);
  return (
    <div className="Dashboard">
      <div
        className="Herobanner"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="herocontent">
          <span className="heading">Elfyer</span>
          <NavHeader category={category} />
        </div>
      </div>
      <section className="outlet-rend">
        <Outlet />
      </section>
    </div>
  );
};

export default Dashboard;
