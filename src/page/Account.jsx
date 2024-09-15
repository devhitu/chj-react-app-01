import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import iconGoogle from '../res/img/icons/icon_google.svg';
import Header from '../component/Header';
import HeaderSide from '../component/HeaderSide';


export default function Settings() {
    const navigate = useNavigate();  // useNavigate 훅 사용


    // 다음 단계 처리 함수
    const handleNextStepOrKeyPress = async (e) => {
    
    };

    return (
        <>
        <Header />
        <div className="content-wrap">
            <HeaderSide></HeaderSide>
            <div className='sub-wrap settings'>
                <div className="inner">
                    <div className="sub-box">
                        <div className="title-box">
                            <img src={iconGoogle} alt="" />
                            <h1>설정 </h1>
                        </div>
                        <div className="input-box">
                            <ul className="input-list">
                                <li>
                                    <input 
                                        type="text" 
                                        placeholder='닉네임' 
                                    />
                                </li>                         
                                <li>
                                    <input 
                                        type="text" 
                                        placeholder='프로필' 
                                    />
                                </li>                         
                                <li>
                                    <input 
                                        type="text" 
                                        placeholder='닉네임' 
                                    />
                                </li>                         
                            </ul>
                            <div className="btn-box">
                                <button onClick={handleNextStepOrKeyPress}>다음</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
