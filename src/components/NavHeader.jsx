import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";

const NavHeader = ({ category }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    navigate(`/category/${selectedCategory}`);
  };
  //handle search btn
  const handleSearch = () => {
    navigate(`/search/${query}`);
  };
  const handleChange = (e) => {
    e.key === "Enter" ? navigate(`/search/${query}`) : setQuery(e.target.value);
  };
  return (
    <div className="navHeader">
      <span>
        <MdOutlineMenu size={"2.5rem"} />
      </span>
      <div className="category-div">
        <select className="categories" onChange={handleCategoryChange}>
          <option value="products">All categories </option>
          {category?.map((type, id) => {
            return (
              <option key={id} value={type}>
                {type}
              </option>
            );
          })}
        </select>
      </div>
      <span className="searchbar">
        <input
          type="text"
          onChange={handleChange}
          onKeyDown={handleChange}
          placeholder="search a product"
        />
        <span className="search-btn" onClick={handleSearch}>
          <IoMdSearch />
        </span>
      </span>
      <select className="language">
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
      </select>
      <span className="cart">
        <FaShoppingCart size={"1.5rem"} /> Cart
      </span>
      <span className="acc">
        <IoPersonSharp size={"1.5rem"} />
      </span>
    </div>
  );
};

export default NavHeader;
