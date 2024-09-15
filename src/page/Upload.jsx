import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import iconGoogle from '../res/img/icons/icon_google.svg';
import Header from '../component/Header';
import HeaderSide from '../component/HeaderSide';


export default function Account() {
    const navigate = useNavigate();  // useNavigate 훅 사용


    // 다음 단계 처리 함수
    const handleNextStepOrKeyPress = async (e) => {
    
    };

    return (
        <>
        <div className='sub-wrap account'>
            <div className="inner">
                <div className="sub-box">
                    <div className="title-box">
                        <img src={iconGoogle} alt="" />
                        <h1>비디오 업로드 </h1>
                    </div>
                    <div className="input-box">
                        <ul className="input-list">
                            <li>
                                <input 
                                    type="text" 
                                    placeholder='비디오 제목' 
                                />
                            </li>                         
                            <li>
                                <label for="thumb-video"></label>
                                <input type="file" placeholder='비디오 썸네일 이미지'/>
                            </li>                         
                            <li>
                                <label for="play-video"></label>
                                <input type="file" placeholder='비디오'/>
                            </li>                         
                            {/* 이부분에서 재생시간, 조회수는 어떻게 받아올지.. */}
                        </ul>
                        <div className="btn-box">
                            <button onClick={handleNextStepOrKeyPress}>업로드</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
