import React from 'react';
import { useEffect, useState } from "react"
import useStore from '../store/store';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css'; // 스타일 파일 임포트

// svg icons
import iconCenter from '../res/img/icons/icon_center.svg';
import iconFire from '../res/img/icons/icon_fire.svg';
import iconFlag from '../res/img/icons/icon_flag.svg';
import iconGame from '../res/img/icons/icon_game.svg';
import iconHome from '../res/img/icons/icon_home.svg';
import iconKids from '../res/img/icons/icon_kids.svg';
import iconLater from '../res/img/icons/icon_later.svg';
import iconLight from '../res/img/icons/icon_light.svg';
import iconLikes from '../res/img/icons/icon_likes.svg';
import iconLive from '../res/img/icons/icon_live.svg';
import iconLogin from '../res/img/icons/icon_login.svg';

import iconMovie from '../res/img/icons/icon_movie.svg';
import iconMusic from '../res/img/icons/icon_music.svg';
import iconMy from '../res/img/icons/icon_my.svg';
import iconPlaylist from '../res/img/icons/icon_playlist.svg';
import iconPodcast from '../res/img/icons/icon_podcast.svg';
import iconRecord from '../res/img/icons/icon_record.svg';
import iconRedLogo from '../res/img/icons/icon_redlogo.svg';
import iconRedMusic from '../res/img/icons/icon_redmusic.svg';
import iconSettings from '../res/img/icons/icon_settings.svg';
import iconShopping from '../res/img/icons/icon_shopping.svg';
import iconShorts from '../res/img/icons/icon_shorts.svg';
import iconSports from '../res/img/icons/icon_sports.svg';
import iconSubscribe from '../res/img/icons/icon_subscribe.svg';
import iconSuggest from '../res/img/icons/icon_suggest.svg';

function HeaderSide() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };


  const isAsideVisible = useStore((state) => state.isAsideVisible);

  return (
    <>
    <PerfectScrollbar>
      <aside>

        {!isAsideVisible ?
          <ul className="btns-menu">
            <li><a href="/"><img src={iconHome} alt="" /><span>홈</span></a></li>
            <li><a href=""><img src={iconShorts} alt="" /><span>Shorts</span></a></li>
            <li><a href=""><img src={iconSubscribe} alt="" /><span>구독</span></a></li>
            <li><a href=""><img src={iconMy} alt="" /><span>나</span></a></li>
            <li><a href=""><img src={iconRecord} alt="" /><span>시청 기록</span></a></li>
          </ul>
          :
          <div className="btn-menu-bar">
            <div className="">
              <ul className="">
                <li><a href=""><img src={iconHome} alt="" /><span>홈</span></a></li>
                <li><a href=""><img src={iconShorts} alt="" /><span>Shorts</span></a></li>
                <li><a href=""><img src={iconSubscribe} alt="" /><span>구독</span></a></li>
              </ul>
            </div>
            <div className="">
              <ul className={`status ${isLoggedIn ? 'login' : 'logout'}`}>
                <li><a href=""><img src={iconMy} alt="" /><span>나</span></a></li>
                <li><a href=""><img src={iconRecord} alt="" /><span>시청기록</span></a></li>
              </ul>
              <ul className={`status ${isLoggedIn ? 'login' : 'logout'}`}>
                {/* 로그인했을 경우 */}
                <li><a href=""><img src={iconPlaylist} alt="" /><span>재생목록</span></a></li>
                <li><a href=""><img src={iconHome} alt="" /><span>내 동영상</span></a></li>
                <li><a href=""><img src={iconLater} alt="" /><span>나중에 볼 동영상</span></a></li>
                <li><a href=""><img src={iconLikes} alt="" /><span>좋아요 표시한 동영상</span></a></li>
              </ul>
            </div>
            <div className="">
              <ul className={`status ${isLoggedIn ? 'login' : 'logout'}`}>
                <li><p>로그인하면 동영상에 좋아요를 표시하고 댓글을 달거나 구독할 수 있습니다.</p><a href=""><img src={iconLogin} alt="" />로그인</a></li>
              </ul>
            </div>
            {/* 로그인했을 경우 */}
            <div className={`status ${isLoggedIn ? 'login' : 'logout'}`}>
              <ul className="">
                <li><a href=""><img src={iconHome} alt="" /><span>구독한 영상 목록</span></a></li>
              </ul>
            </div>
            <div className="">
              <p>탐색</p>
              <ul className="">
                <li><a href=""><img src={iconFire} alt="" /><span>인기 급상승</span></a></li>
                <li><a href=""><img src={iconShopping} alt="" /><span>쇼핑</span></a></li>
                <li><a href=""><img src={iconMusic} alt="" /><span>음악</span></a></li>
                <li><a href=""><img src={iconMovie} alt="" /><span>영화</span></a></li>
                <li><a href=""><img src={iconLive} alt="" /><span>실시간</span></a></li>
                <li><a href=""><img src={iconGame} alt="" /><span>게임</span></a></li>
                <li><a href=""><img src={iconSports} alt="" /><span>스포츠</span></a></li>
                <li><a href=""><img src={iconLight} alt="" /><span>학습 프로그램</span></a></li>
                <li><a href=""><img src={iconPodcast} alt="" /><span>팟캐스트</span></a></li>
              </ul>
            </div>
            <div className="">
              <p><b>Youtube</b> 더보기</p>
              <ul className="">
                <li><a href=""><img src={iconRedLogo} alt="" /><span>Youtube Premium</span></a></li>
                <li><a href=""><img src={iconRedMusic} alt="" /><span>Youtube Music</span></a></li>
                <li><a href=""><img src={iconKids} alt="" /><span>Youtube Kids</span></a></li>
              </ul>
            </div>
            <div className="">
              <ul className="">
                <li><a href=""><img src={iconSettings} alt="" /><span>설정</span></a></li>
                <li><a href=""><img src={iconFlag} alt="" /><span>신고 기록</span></a></li>
                <li><a href=""><img src={iconCenter} alt="" /><span>고객센터</span></a></li>
                <li><a href=""><img src={iconSuggest} alt="" /><span>의견 보내기</span></a></li>
              </ul>
            </div>
            <div className="footer">
              <ul className="">
                <li>AboutPressCopyrightContact usCreatorsAdvertiseDevelopers</li>
                <li>TermsPrivacyPolicy & SafetyHow YouTube worksTest new features</li>
                <li>© 2024 Google LLC, Sundar Pichai, 1600 Amphitheatre Parkway, Mountain View CA 94043, USA, 0807-882-594 (무료), yt-support-solutions-kr@google.com, 호스팅: Google LLC, 사업자정보, 불법촬영물 신고</li>
                <li>크리에이터들이 유튜브 상에 게시, 태그 또는 추천한 상품들은 판매자들의 약관에 따라 판매됩니다. 유튜브는 이러한 제품들을 판매하지 않으며, 그에 대한 책임을 지지 않습니다</li>
              </ul>
            </div>
          </div>
        }


      </aside>
      </PerfectScrollbar>
    </>
  )
}

export default HeaderSide;