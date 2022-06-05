import React,{useState,useRef} from 'react'
import './Create.css'
import { useHistory } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { db } from '../../firebase/config'
import { collection,addDoc } from 'firebase/firestore'
const Create = () => {

  // const {postData,data,error} = useFetch('http://localhost:8000/bloglar',"POST")
  const history = useHistory();
  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')
  const [read,setRead] = useState('')
  const [newCategory,setNewCategory] = useState('')
  const [category,setCategory] = useState([])
  const categoryInput = useRef(null)
  const {mode} = useTheme()
  const handleSubmit = async (e) =>{
    e.preventDefault()
    // postData({baslik:title,icerik:content,okunmaSuresi : read + 'dakika',kategoriler:category})
    const doc = {baslik:title,icerik:content,okunmaSuresi : read + 'dakika',kategoriler:category}
    const ref = collection(db,'bloglar')
    try {
      await addDoc(ref,{
        ...doc
      })
      history.push('/')
    } catch (error) {
      console.error(error)
    }
  }


  const handleAdd = (e) => {
    e.preventDefault()
    if(newCategory && !category.includes(newCategory)){
      setCategory(oKat => [...oKat,newCategory])
    }
    setNewCategory('')
    categoryInput.current.focus()
  }

  // useEffect(() => {
  //   if(data){
  //     history.push('/')
  //   }
  // },[data])

  return (
    <div className={`create ${mode}`}>
      <h2 className='page-title'>Yeni Yazı Oluştur</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Yazı Başlık : </span>
          <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} required autoFocus ></input>
        </label>
        <label>
          <span>Yazı Kategorileri : </span>
          <div className="categories">
            <input type="text" onChange={(e) => setNewCategory(e.target.value)} value={newCategory} ref={categoryInput} />
            <button onClick={handleAdd} className="btnAdd btn">Ekle</button>
          </div>
        </label>
        <p>Kategoriler : <span className='list'>{category.map(i => <em key={i}>{i}, </em>)}</span></p>
        <label>
          <span>Yazı İçerik : </span>
          <textarea rows={5}  onChange={(e) => setContent(e.target.value)} value={content} required></textarea>
        </label>
        <label>
          <span>Okunma Süresi : </span>
          <textarea type="number" onChange={(e) => setRead(e.target.value)} value={read} required></textarea>
        </label>
        <button className="btn"> Oluştur </button>
      </form>
    </div>
  )
}

export default Create