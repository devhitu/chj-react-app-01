import React from 'react';
import { useEffect, useState } from "react"
import useStore from '../store/store';

// 이미지
import iconMenu from '../res/img/icons/icon_menu.svg';
import logo from '../res/img/logo.svg';
import icon_my from '../res/img/icons/icon_my.svg';
import icon_subscribe from '../res/img/icons/icon_subscribe.svg';

export default function Header() {

  const toggleAside = useStore((state) => state.toggleAside);
  const handleToggleAside = () => {
    toggleAside(); // Zustand를 통해 aside의 가시성 토글
  };

  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
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
          <li><a href="/login">로그인</a></li>
          <li>&#183;</li>
          <li><a href="/join">회원가입</a></li>
          <li>&#183;</li>
          <li>
            <a href="#" onClick={(e) => {
              e.preventDefault();
              toggleMenu();
            }}>
              설정
            </a>
          </li>
        </ul>
      </header>
      {isVisible && (
        <div className="settings_pop">
          <ul>
            <li><a href="/account"><span><img src={icon_my} alt="" />계정</span>&gt;</a></li>
            <li><a href="/upload"><span><img src={icon_subscribe} alt="" />비디오 업로드</span>&gt;</a></li>
          </ul>
        </div>
      )}
    </>
  )
}
