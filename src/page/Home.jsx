import React from 'react';
import { useEffect, useState } from "react"

import useStore from '../store/store';
import Header from '../component/Header';
import Footer from '../component/Footer';
import HeaderSide from '../component/HeaderSide';
import iconVerticalMenu from '../res/img/icons/icon_vertical_menu.svg';

export default function Home() {
    // Zustand를 통해 상태와 액션 가져오기
    const isAsideVisible = useStore((state) => state.isAsideVisible);
    const toggleAside = useStore((state) => state.toggleAside);

    // toggleAside 함수를 이용한 handleToggleAside 함수 정의
    const handleToggleAside = () => {
        toggleAside(); // Zustand의 toggleAside 액션 호출
    };

    const videos = [
        { id: 1, title: '비디오 제목 1 비디오 제목 1 비디오 제목 1 비디오 제목 1 비디오 제목 1 비디오 제목 1 비디오 제목 1 비디오 제목 1', videoSrc: 'video1.mp4', profileImgSrc: 'profile1.jpg', channelName: '비디오1', views: '1000', date: '13시간 전' },
        { id: 2, title: '비디오 제목 2', videoSrc: 'video2.mp4', profileImgSrc: 'profile2.jpg', channelName: '비디오2', views: '1001', date: '13시간 전' },
        { id: 3, title: '비디오 제목 3', videoSrc: 'video2.mp4', profileImgSrc: 'profile2.jpg', channelName: '비디오3', views: '1001', date: '13시간 전' },
        { id: 4, title: '비디오 제목 4', videoSrc: 'video2.mp4', profileImgSrc: 'profile2.jpg', channelName: '비디오4', views: '1001', date: '13시간 전' },
        { id: 5, title: '비디오 제목 5', videoSrc: 'video2.mp4', profileImgSrc: 'profile2.jpg', channelName: '비디오5', views: '1001', date: '13시간 전' },
        { id: 6, title: '비디오 제목 6', videoSrc: 'video2.mp4', profileImgSrc: 'profile2.jpg', channelName: '비디오6', views: '1001', date: '13시간 전' },
        { id: 7, title: '비디오 제목 7', videoSrc: 'video2.mp4', profileImgSrc: 'profile2.jpg', channelName: '비디오7', views: '1001', date: '13시간 전' },
        { id: 8, title: '비디오 제목 8', videoSrc: 'video2.mp4', profileImgSrc: 'profile2.jpg', channelName: '비디오8', views: '1001', date: '13시간 전' },
        { id: 9, title: '비디오 제목 9', videoSrc: 'video2.mp4', profileImgSrc: 'profile2.jpg', channelName: '비디오9', views: '1001', date: '13시간 전' },
        { id: 10, title: '비디오 제목 10', videoSrc: 'video2.mp4', profileImgSrc: 'profile2.jpg', channelName: '비디오10', views: '1001', date: '13시간 전' },
    ];

    return (
        <>
        
            <Header />
            <div className="content-wrap">
                <HeaderSide></HeaderSide>
                <div className={`filter-video-wrap ${isAsideVisible ? 'wide-filter' : ''}`}>
                <div className="filter-wrap" >
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
                                        <iframe id="ytplayer" type="text/html" width="720" height="405"src="https://www.youtube.com/embed/M7lc1UVf-VE"frameborder="0" allowfullscreen></iframe>
                                        <video src={video.videoSrc}></video>
                                        <div className="details">
                                            <div className="profile"><img src={video.profileImgSrc} alt="" /></div>
                                            <div className="text">
                                                <h3 className='title'>{video.title}</h3>
                                                <p className='name'>{video.channelName}</p>
                                                <p className='view-date'>
                                                    <span className='view'>조회수&ensp;{video.views}</span>
                                                    <span class='date'>{video.date}</span>
                                                </p>
                                            </div>
                                            <div className="menu"><img src={iconVerticalMenu} alt="" /></div>
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