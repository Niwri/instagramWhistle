import React from 'react'
import { MenuBarItems } from './MenuBarItems.js';

const MenuBar = () => {

    const pathName = (item) => {
        let path = window.location.pathname;
        console.log(path);
        console.log(item.anchor);
        if(item.anchor === path) 
            return (
                <div style={{backgroundColor: item.color}}>
                    <p style={{color: 'black', fontWeight: 'bold', fontSize: 32}}>{item.name}</p>
                </div>
            )
         else 
            return (
                <div>
                    <p>{item.name}</p>
                </div>
            )
        
    }

  return (
    <div id="menuBarContainer">
        {MenuBarItems.map((item) => {
            return (
                <a href={item.anchor}>
                    {pathName(item)}
                </a>
            )
        })}

    </div>
  )
}

export default MenuBar