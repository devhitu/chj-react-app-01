import React from 'react';
import Header from '../component/Header';

export default function Login(){
    return(
        <>
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
                        <button>다음</button>
                    </div>
                </div>
            </div>
        </>
    )
}