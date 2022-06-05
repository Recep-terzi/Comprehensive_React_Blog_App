import { Link } from "react-router-dom";
import React from 'react'
import './Navbar.css'
import SearchBar from "../SearchBar/SearchBar";
import { useTheme } from "../../hooks/useTheme";


const Navbar = () => {

  const {bgcolor,changeColor} = useTheme();

  return (
    <div className="navbar" style={{backgroundColor: bgcolor}}>
        <nav onClick={()=>changeColor('#c44569')}>
            <Link to="/" className="brand">
            <h1> Pyson BLog</h1>
            </Link>
            <SearchBar />
            <Link to="/create" className="nav-btn">
             Yeni Yazı 
            </Link>
        </nav>
    </div>
  )
}

export default Navbar