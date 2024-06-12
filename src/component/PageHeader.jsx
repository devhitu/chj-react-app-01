import React from 'react';

export default function PageHeader(){
    return(
        <>
            <header>
                <div className="inner">
                    <div className="flex">
                        <h1>REACT 실습</h1>
                        <ul className="list">
                            <li><a href="/join">회원가입</a></li>
                            <li><a href="/login">로그인{/*로그아웃 */}</a></li>
                            
                            <li class="btn-mode"><a href="/"><span className="emoji">🌜{/* 🌞 */}</span></a></li>
                            
                        </ul>                      
                    </div>
                </div>
            </header>
            <div className="menu-list">

            </div>
        </>
    )
}
