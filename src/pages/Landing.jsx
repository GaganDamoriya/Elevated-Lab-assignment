import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const nav = () => {
      navigate("/category/products");
    };
    nav();
  }, [navigate]);

  return <div>Landing</div>;
};

export default Landing;
