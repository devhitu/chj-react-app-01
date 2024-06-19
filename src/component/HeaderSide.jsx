import React from 'react';
import { useEffect, useState } from "react"


export default function HeaderSide(){
    return(
        <>
          <aside>
            <div className='btn-menu'><a href=""></a></div>
            
            <ul className="btns-menu">
              <li><a href=""><img src="" alt="" /></a><span>Shorts</span></li>
              <li><a href=""><img src="" alt="" /></a><span>구독</span></li>
              <li><a href=""><img src="" alt="" /></a><span>나</span></li>
            </ul>

            <div className="btn-menu-bar">
              <div className="dim"></div>
              <div className="">
                <ul className="">
                  <li><i class="fa-solid fa-magnifying-glass"></i><a href=""><img src="" alt="" /></a><span>홈</span></li>
                  <li><a href=""><img src="" alt="" /></a><span>Shorts</span></li>
                  <li><a href=""><img src="" alt="" /></a><span>구독</span></li>
                </ul>
              </div>
              <div className="">
                <ul className="">
                  <li><a href=""><img src="" alt="" /></a><span>나</span></li>
                  <li><a href=""><img src="" alt="" /></a><span>시청기록</span></li>
                  {/* 로그인했을 경우 */}
                  <li><a href=""><img src="" alt="" /></a><span>재생목록</span></li>
                  <li><a href=""><img src="" alt="" /></a><span>내 동영상</span></li>
                  <li><a href=""><img src="" alt="" /></a><span>나중에 볼 동영상</span></li>
                  <li><a href=""><img src="" alt="" /></a><span>좋아요 표시한 동영상</span></li>

                </ul>
              </div>
              <div className="">
                <ul className="">
                  <li><p>로그인하면 동영상에 좋아요를 표시하고 댓글을 달거나 구독할 수 있습니다.</p><a href=""><img src="" alt=""/>로그인</a></li>
                </ul>
              </div>
              {/* 로그인했을 경우 */}
              <div className="">
                <ul className="">
                  <li><a href=""><img src="" alt="" /></a><span>구독한 영상 목록</span></li>
                </ul>
              </div>
              <div className="">
                <p>탐색</p>
                <ul className="">
                  <li><a href=""><img src="" alt="" /></a><span>인기 급상승</span></li>
                  <li><a href=""><img src="" alt="" /></a><span>쇼핑</span></li>
                  <li><a href=""><img src="" alt="" /></a><span>음악</span></li>
                  <li><a href=""><img src="" alt="" /></a><span>영화</span></li>
                  <li><a href=""><img src="" alt="" /></a><span>실시간</span></li>
                  <li><a href=""><img src="" alt="" /></a><span>게임</span></li>
                  <li><a href=""><img src="" alt="" /></a><span>스포츠</span></li>
                  <li><a href=""><img src="" alt="" /></a><span>학습 프로그램</span></li>
                  <li><a href=""><img src="" alt="" /></a><span>팟캐스트</span></li>
                </ul>
              </div>          
              <div className="">
                <p><b>Youtube</b> 더보기</p>
                <ul className="">
                  <li><a href=""><img src="" alt="" /></a><span>Youtube Premium</span></li>
                  <li><a href=""><img src="" alt="" /></a><span>Youtube Music</span></li>
                  <li><a href=""><img src="" alt="" /></a><span>Youtube Kids</span></li>
                </ul>
              </div>          
              <div className="">
                <ul className="">
                  <li><a href=""><img src="" alt="" /></a><span>설정</span></li>
                  <li><a href=""><img src="" alt="" /></a><span>신고 기록</span></li>
                  <li><a href=""><img src="" alt="" /></a><span>고객센터</span></li>
                  <li><a href=""><img src="" alt="" /></a><span>의견 보내기</span></li>
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
          </aside>
        </>
    )
}
