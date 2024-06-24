import React from 'react';
import { useEffect, useState } from "react"

import useStore from '../store/store';
import Header from '../component/Header';
import Footer from '../component/Footer';
import HeaderSide from '../component/HeaderSide';

export default function Home() {
    const [isAsideVisible, setIsAsideVisible] = useState(false); // useState를 이용해 isAsideVisible 상태 추가

    // Zustand를 통해 isAsideVisible 상태 동기화
    const toggleAside = useStore((state) => state.toggleAside);

    // isAsideVisible값 갱신
    const isAsideVisibleFromZustand = useStore((state) => state.isAsideVisible);
  
    // Zustand의 isAsideVisible 상태가 변경될 때마다 로컬 상태 업데이트
    useEffect(() => {
      setIsAsideVisible(isAsideVisibleFromZustand);
    }, [isAsideVisibleFromZustand]);
  
    // toggleAside 함수를 이용한 handleToggleAside 함수 정의
    const handleToggleAside = () => {
      toggleAside(); // Zustand의 toggleAside 상태 토글 함수 호출
    };

    const videos = [
        { id: 1, videoSrc: 'video1.mp4', profileImgSrc: 'profile1.jpg', channelName: '멍플리1', views: '1000' },
        { id: 2, videoSrc: 'video2.mp4', profileImgSrc: 'profile2.jpg', channelName: '멍플리2', views: '1500' },
        { id: 2, videoSrc: 'video2.mp4', profileImgSrc: 'profile2.jpg', channelName: '멍플리3', views: '1500' },
        { id: 2, videoSrc: 'video2.mp4', profileImgSrc: 'profile2.jpg', channelName: '멍플리4', views: '1500' },
        { id: 2, videoSrc: 'video2.mp4', profileImgSrc: 'profile2.jpg', channelName: '멍플리5', views: '1500' },
        { id: 2, videoSrc: 'video2.mp4', profileImgSrc: 'profile2.jpg', channelName: '멍플리6', views: '1500' },
        { id: 2, videoSrc: 'video2.mp4', profileImgSrc: 'profile2.jpg', channelName: '멍플리7', views: '1500' },
        { id: 2, videoSrc: 'video2.mp4', profileImgSrc: 'profile2.jpg', channelName: '멍플리8', views: '1500' },
        { id: 2, videoSrc: 'video2.mp4', profileImgSrc: 'profile2.jpg', channelName: '멍플리9', views: '1500' },
        { id: 2, videoSrc: 'video2.mp4', profileImgSrc: 'profile2.jpg', channelName: '멍플리10', views: '1500' },
    ];
    return (
        <>
        
            <Header />
            <div className="content-wrap">
                <HeaderSide></HeaderSide>
                <div className="">
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
                {isAsideVisible && <div className="asideDim" onClick={handleToggleAside}></div>}
                <main>
                    <div class="inner">
                        <ul className="video-wrap">
                            {videos.map(video => (
                                <li key={video.id}>
                                    <a href="#">
                                        <video src={video.videoSrc}></video>
                                        <div className="title">
                                            <div className="profile_img"><img src={video.profileImgSrc} alt="" /></div>
                                            <div className="info">
                                                <p>{/* 여기에 내용 추가 */}</p>
                                                <p>{/* 여기에 내용 추가 */}</p>
                                                <p className='channel_name'>{video.channelName}</p>
                                                <p className='view-details'>{video.views}</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </main>
                </div>
            </div>            
            <Footer />
        </>
    )
}