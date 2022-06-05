import React,{useState,useEffect} from 'react'
import { db } from '../../firebase/config'
import BlogList from '../BlogList/BlogList'
import './Home.css'
import {collection,onSnapshot} from 'firebase/firestore'
const Home = () => {
  
  //const {data,loading,error} = useFetch('http://localhost:8000/bloglar')
  
  const [data,setData] = useState(null)
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(false)


  useEffect(() => {
    setLoading(true)
    const ref = collection(db,'bloglar')

    onSnapshot(ref,(snapshot) => {
      if(snapshot.empty){
        setError('Bir hata oluştu')
        setLoading(false)
      }
      else{
        let sonuclar = []
        snapshot.forEach(doc => {
          sonuclar.push({id:doc.id,...doc.data()})
        })
        setData(sonuclar)
        setLoading(false)
        
      }
      
    },(error) => {
      setLoading(false)
    })
  },[])


  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {loading && <p className='loading'>Yükleniyor...</p>}
      {
        data && <BlogList blogs = {data}/>
      }
    </div>
  )
}

export default Home