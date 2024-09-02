import axios from 'axios';
import React from 'react';
import Header from '../component/Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import iconGoogle from '../res/img/icons/icon_google.svg';

export default function Settings() {
    const navigate = useNavigate();  // useNavigate 훅 사용


    // 다음 단계 처리 함수
    const handleNextStepOrKeyPress = async (e) => {
    
    };

    return (
        <>
            <div className='sub-wrap settings'>
                <div className="inner">
                    <div className="sub-box">
                        <div className="title-box">
                            <img src={iconGoogle} alt="" />
                            <h1>로그인 </h1>
                            <p onClick={() => navigate('/')}>YouTube로 이동</p>
                        </div>
                        <div className="input-box">
                            <ul className="input-list">
                                <li>
                                    <input 
                                        type="text" 
                                        placeholder='아이디' 
                                        // value={id}
                                        // onChange={handleIdChange}
                                    />
                                    <span className="mail_txt">gmail.com</span>
                                </li>
                                <li>
                                    <input 
                                        // type={showPassword ? 'text' : 'password'} 
                                        placeholder='비밀번호' 
                                        // value={pw} 
                                        // onChange={handlePwChange}
                                    />                                    
                                </li>
                                <div className="showPassword-box">
                                    <label htmlFor="showPasswordCheckbox">
                                        <input 
                                            type="checkbox" 
                                            id="showPasswordCheckbox"
                                            // onChange={toggleShowPassword} 
                                        />
                                        <span>비밀번호 표시</span>
                                    </label>
                                </div>                                
                            </ul>
                            <div className="btn-box">
                                <button onClick={handleNextStepOrKeyPress}>다음</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
