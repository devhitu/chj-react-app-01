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
                        <h1>계정 </h1>
                    </div>
                    <div className="input-box">
                        <ul className="input-list">
                            <li>
                                <input 
                                    type="text" 
                                    placeholder='닉네임' 
                                />
                            </li>                         
                            <li className='profile'>
                                <label for="profile-picture"></label>
                                <input type="file"/>
                            </li>                                                  
                        </ul>
                        <div className="btn-box">
                            <button onClick={handleNextStepOrKeyPress}>저장</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
