import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

import "./BlogList.css";
import deleteIcon from '../../assets/delete.svg'
import editIcon from "../../assets/edit.svg"
import { db } from "../../firebase/config";
import { doc,deleteDoc} from 'firebase/firestore';
import { useHistory } from "react-router-dom";
const BlogList = ({ blogs }) => {

  const {mode} = useTheme()

  const history = useHistory()
  const handleDelete = async (id) => {
    console.log(id)
    const ref = doc(db,'bloglar',id);
    await deleteDoc(ref);

  }

  if(blogs.length ===0){
    return <div className="error" style={{textAlign: 'center',color:"red"}}>Aranan yazıya ilişkin bilgi bulunamadı.</div>
  }

  const imageClick = (id) => {
    history.push('/edit/' + id)
  }


  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className={`card ${mode}`} key={blog.id}>
          <h3>{blog.baslik}</h3>
          <p>{blog.okunmaSuresi}</p>
          <div>{blog.icerik.substring(0,100)}...</div> 
          <Link to = {`/blog/${blog.id}`}>Daha Fazla Oku</Link>
          <img src={editIcon} alt=" Yazıyı düzenle" className="edit" onClick={() => imageClick(blog.id)}></img>
          <img className="delete" onClick={()=>handleDelete(blog.id)} src={deleteIcon} alt=" Yazıyı sil"/>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
