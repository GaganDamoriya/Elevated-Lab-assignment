import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const Search = () => {
  const { query } = useParams();
  const [data, setData] = useState([]);
  const [querydata, setQueryData] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    const getQueryData = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://fakestoreapi.com/products");
        setData(res.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getQueryData();
  }, []);

  useEffect(() => {
    filterQuery();
  }, [query, data]);

  const filterQuery = () => {
    if (!query) {
      setQueryData(data);
      return;
    }
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setQueryData(filteredData);
  };

  return (
    <div className="Search-tab">
      <h1>{`Search >>  ${query}`}</h1>
      <div className="display-products">
        {querydata.length > 0
          ? querydata.map((item, id) => {
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
                />
              );
            })
          : "No Item Found"}
      </div>
    </div>
  );
};

export default Search;
