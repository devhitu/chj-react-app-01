import React from 'react';
import { useEffect, useState } from "react"
import useStore from '../store/store';
import HeaderSide from './HeaderSide';
import iconMenu from '../res/img/icons/icon_menu.svg';
import logo from '../res/img/logo.svg';
export default function Header() {


  const toggleAside = useStore((state) => state.toggleAside);


  const handleToggleAside = () => {
    toggleAside(); // Zustand를 통해 aside의 가시성 토글
  };
  // const [isDarkMode, setIsDarkMode] = useState(false);
  // const toggleEmoji = () => {
  //   setIsDarkMode(prevState => !prevState);
  // };
  // const mode = isDarkMode ? '🌞' : '🌜';

  // useEffect(() => {
  //     if (isDarkMode) {
  //       document.body.classList.add('night');
  //       document.body.classList.remove('day');
  //     } else {
  //       document.body.classList.add('day');
  //       document.body.classList.remove('night');
  //     }
  //   }, [isDarkMode]);    

  return (
    <>
      <header>
        <div className="header-wrap">
          <ul className='logo-wrap'>
            <li onClick={handleToggleAside} class="menu"><img src={iconMenu} alt="메뉴" /></  li>
            <li class="logo"><a href="/"><img src={logo} alt="Youtube" /></a></li>
          </ul>
          <div className="search-wrap"><input type="text" /></div>

          <ul className="login-wrap">
            <li><a href="/login">로그인</a></li>
            {/* <li className="btn-mode"><span className="emoji" onClick={toggleEmoji}>{mode}</span></li> */}
          </ul>
        </div>
        <div className="header-wrap2">
          <HeaderSide></HeaderSide>
          <div className="filter-wrap">
            <ul>
              <li className='on'><a href="">전체</a></li>
              <li><a href="">음악</a></li>
              <li><a href="">믹스</a></li>
              <li><a href="">랩</a></li>
              <li><a href="">최근에 업로드된 동영상</a></li>
              <li><a href="">감상한 동영상</a></li>
              <li><a href="">새로운 맞춤 동영상</a></li>
            </ul>
          </div>

        </div>
      </header>
    </>
  )
}
