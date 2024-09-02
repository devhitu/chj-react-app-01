import axios from 'axios';
import React from 'react';
import Header from '../component/Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import iconGoogle from '../res/img/icons/icon_google.svg';

export default function Login() {
    const navigate = useNavigate();  // useNavigate 훅 사용

    // 상태 정의
    const [id, setId] = useState('');
    // const [confirmId, setConfirmId] = useState('');
    const [pw, setPw] = useState('');
    // const [confirmPw, setConfirmPw] = useState('');
    const [showPassword, setShowPassword] = useState(false);    

    // 비밀번호 표시 토글 함수
    const toggleShowPassword = () => setShowPassword(!showPassword);

    // 아이디 입력 핸들러
    const handleIdChange = (e) => setId(e.target.value.trim());

    // 비밀번호 입력 핸들러
    const handlePwChange = (e) => setPw(e.target.value.trim());

    // 다음 단계 처리 함수
    const handleNextStepOrKeyPress = async (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            e.preventDefault(); // 기본 동작을 막음
            
            try {
                const responseSave = await axios.get('http://3.36.28.140:8080/chj_react_restapi/api/user/login', {
                    params: {
                        id: id,
                        pw: pw,
                    }
                });

                console.log(responseSave.data)

                if(responseSave.data==''){
                    alert('로그인 실패');
                    return;
                }
                var loginUser = responseSave.data; //zustand
                
                // else{
                //     alert('로그인 성공')
                // }

                // setConfirmId(responseSave.data.id); 
                // setConfirmPw(responseSave.data.pw); 

                // if (confirmId !== id) {
                //     alert('아이디가 유효하지 않습니다.');
                // } else if (confirmPw !== pw) {
                //     alert('비밀번호가 유효하지 않습니다');
                // } else {
                //     navigate('/');
                // }

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
