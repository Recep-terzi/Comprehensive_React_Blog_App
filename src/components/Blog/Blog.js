import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { useTheme } from "../../hooks/useTheme";
import "./Blog.css";
import { doc, getDoc } from "firebase/firestore";
const Blog = () => {
  const { mode } = useTheme();
  const { id } = useParams();
  //const url = "http://localhost:8000/bloglar/" + id;
  //const { error, data: blog, loading } = useFetch(url);
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const ref = doc(db, "bloglar", id);
    getDoc(ref).then((doc) => {
      if (doc.exists) {
        setLoading(false);
        setBlog(doc.data())
      } else {
        setLoading(false);
        setError('veriye erişilmedi')        
      }
    });
  }, [id]);
  return (
    <div className={`blog ${mode}`}>
      {error && <p className="error">{error}</p>}
      {loading && <p className="loading">{loading}</p>}
      {blog && (
        <>
          <h2 className="page-title">{blog.baslik}</h2>
          <p className="time">{blog.okunmaSuresi} okunma süresi</p>
          <ul>
            {blog.kategoriler.map((category) => (
              <li key={category.id}>{category}</li>
            ))}
          </ul>
          <p className="info">{blog.icerik}</p>
        </>
      )}
    </div>
  );
};

export default Blog;
