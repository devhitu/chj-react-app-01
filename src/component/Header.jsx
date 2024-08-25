import React from 'react';
import { useEffect, useState } from "react"
import useStore from '../store/store';

// 이미지
import iconMenu from '../res/img/icons/icon_menu.svg';
import logo from '../res/img/logo.svg';

export default function Header() {

  const toggleAside = useStore((state) => state.toggleAside);
  const handleToggleAside = () => {
    toggleAside(); // Zustand를 통해 aside의 가시성 토글
  };

  return (
    <>
      <header className="header-wrap">
        <ul className='logo-wrap'>
          <li onClick={handleToggleAside} class="menu"><img src={iconMenu} alt="메뉴" /></  li>
          <li class="logo"><a href="/"><img src={logo} alt="Youtube" /></a></li>
        </ul>
        <div className="search-wrap"><input type="text" /></div>
        <ul className="login-wrap">
          <li><a href="/join/step1">회원가입</a></li>
          {/* <li className="btn-mode"><span className="emoji" onClick={toggleEmoji}>{mode}</span></li> */}
        </ul>
      </header>
    </>
  )
}
