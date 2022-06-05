import React from "react";
import { useTheme } from "../../hooks/useTheme";
import "./ThemeSelector.css";
import ModeIcon from "../../assets/icon.svg"
const themeColors = ["#778beb", "#cf6a87", "#f8a5c2", "#e77f67"];
const ThemeSelector = () => {
  const { changeColor,changeMode,mode } = useTheme();
  
  const toggleMode = () => {
      changeMode(mode==='dark' ? 'light' : 'dark');
  }
  console.log(mode);

  return (
    <div className="theme-selector">
        <div className="mode-toggle">
            <img src={ModeIcon} onClick={toggleMode} style={{filter:mode==='dark'?'invert(100%)':'invert(20%)'}} alt="dark / light toggle icon"></img>
        </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div key={color} onClick={()=>changeColor(color)} style={{backgroundColor:color}}>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
