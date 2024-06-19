import React from 'react';
import { useEffect, useState } from "react"
import HeaderSide from './HeaderSide';


export default function Header(){
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleEmoji = () => {
      setIsDarkMode(prevState => !prevState);
    };
    const mode = isDarkMode ? '🌞' : '🌜';

    useEffect(() => {
        if (isDarkMode) {
          document.body.classList.add('night');
          document.body.classList.remove('day');
        } else {
          document.body.classList.add('day');
          document.body.classList.remove('night');
        }
      }, [isDarkMode]);    

    return(
          <>
          <HeaderSide></HeaderSide>
            <header>
                <div className="inner">
                    <div className="flex">
                        <h1><a href="/"><img src="/chj-react-app-01/src/res/img/logo.png" alt="" /></a></h1>
                        <div className="search_box"><input type="text" /></div>
                        <ul className="list">
                            <li><a href="/login">로그인</a></li>
                            <li className="btn-mode"><span className="emoji" onClick={toggleEmoji}>{mode}</span></li>
                        </ul>                      
                    </div>
                </div>
            </header>
            <div className="menu-list">

            </div>
        </>
    )
}
