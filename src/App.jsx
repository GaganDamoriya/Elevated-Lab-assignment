import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from "axios";
import Category from "./pages/Category";
import Landing from "./pages/Landing";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Landing />} />
            <Route path="category/:category" element={<Category />} />
            <Route path="search/:query" element={<Search />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
