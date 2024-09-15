import axios from 'axios';
import React from 'react';
import Header from '../component/Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import iconGoogle from '../res/img/icons/icon_google.svg';
import useJoinUserStore from '../store/useJoinUserStore';


export default function Login() {
    const navigate = useNavigate();
    const joinUserStore = useJoinUserStore();

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [showPassword, setShowPassword] = useState(false);    

    const toggleShowPassword = () => setShowPassword(!showPassword);

    const handleIdChange = (e) => {
        const value = e.target.value.trim();
        joinUserStore.setId(value); // Zustand 상태 업데이트
    };
    const handlePwChange = (e) => {
        const value = e.target.value.trim();
        joinUserStore.setPw(value); // Zustand 상태 업데이트
    };


    // 다음 단계 처리 함수
    const handleNextStepOrKeyPress = async (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            e.preventDefault(); // 기본 동작을 막음
            
            try {
                const resposeLogin = await axios.get('http://3.36.28.140:8080/chj_react_restapi/api/user/login', {
                    params: {
                        id: id,
                        pw: pw,
                    }
                });

                if(resposeLogin.data==''){
                    alert('사용자정보가 유효하지 않습니다.');
                    return;
                }else{
                    navigate('/');
                }
                var loginUser = resposeLogin.data; //zustand

            } catch (error) {
                console.error('Error saving user:', error.response ? error.response.data : error.message);
            }            
        }        
    };

    return (
        <>
            <div className='sub-wrap login'>
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
                                        value={id}
                                        onChange={handleIdChange}
                                    />
                                    <span className="mail_txt">gmail.com</span>
                                </li>
                                <li>
                                    <input 
                                        type={showPassword ? 'text' : 'password'} 
                                        placeholder='비밀번호' 
                                        value={pw} 
                                        onChange={handlePwChange}
                                    />                                    
                                </li>
                                <div className="showPassword-box">
                                    <label htmlFor="showPasswordCheckbox">
                                        <input 
                                            type="checkbox" 
                                            id="showPasswordCheckbox"
                                            onChange={toggleShowPassword} 
                                            onKeyPress={handleNextStepOrKeyPress} 
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
