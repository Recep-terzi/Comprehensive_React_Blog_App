import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import BlogList from "../BlogList/BlogList";
import "./Search.css";
const Search = () => {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");
  const url = "http://localhost:8000/bloglar?q=" + query;
  console.log(query);
  const { error, loading, data } = useFetch(url);
  
  return (
    <div>
      <h2 className="page-title">Aranan Kelime : {query} </h2>
      {error && <p className="error">{error}</p>}
      {loading && <p className="loading">Yükleniyor...</p>}
      {data && <BlogList blogs={data} />}
    </div>
  );
};

export default Search;
