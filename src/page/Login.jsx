import React from 'react';
import PageHeader from '../component/PageHeader';
import PageFooter from '../component/PageFooter';
import Swiper from '../component/Swiper';

export default function Login(){
    return(
        <>
            <PageHeader/>
            <div className='sub-wrap login'>
                <div className="inner">
                    <div className="login-box">
                        <div className="login-input-list flex">
                            <div>
                                <span className="emoji">🙍‍♂️</span>
                                <input type="text" placeholder='아이디를 입력하세요'/>
                            </div>
                            <div>
                                <span className="emoji">👨‍💻</span>
                                <input type="password" />
                            </div>
                        </div>
                        <button>로그인</button>
                    </div>
                    <ul className="list">
                        <li><a href="/">비밀번호 찾기</a></li>
                        <li><a href="/">아이디 찾기</a></li>
                        <li><a href="/join">회원가입</a></li>
                    </ul>


                    <div className="banner-box">
                        <Swiper/>
                    </div>
                </div>
            </div>
            <PageFooter/>
        </>
    )
}