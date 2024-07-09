import React from 'react';
import iconGoogle from '../res/img/icons/icon_google.svg';

export default function Join() {
    return (
        <>
            <div className='sub-wrap join'>
                <div className="inner">
                    <div className="join-box">
                        {/* 회원가입 STEP 1 */}
                        <div className="title-box">
                            <img src={iconGoogle} alt="" />
                            <h1>Google 계정 만들기</h1>
                            <p>이름을 입력하세요</p>
                        </div>
                        <div className="input-box">
                            <ul className="input-list type1">
                                <li><input type="text" placeholder='성(선택사항)'/></li>
                                <li><input type="text" placeholder='이름'/></li>
                            </ul>
                            <div className="btn-box"><button>다음</button></div>                            
                        </div>


                        {/* 회원가입 STEP 2 */}
                        <div className="title-box">
                            <img src={iconGoogle} alt="" />
                            <h1>기본 정보</h1>
                            <p>생일과 성별을 입력하세요</p>
                        </div>

                        <div className="input-box">
                            <ul className="input-list type3">
                                <li><input type="text" placeholder='연'/></li>
                                <li>
                                    <select name="" id="">
                                        <option value="">월</option>
                                        <option value="">1</option>
                                        <option value="">2</option>
                                    </select>
                                </li>
                                <li><input type="text" placeholder='월'/></li>
                            </ul>
                            <div className="btn-box"><button>다음</button></div>                            
                        </div>
                            
                        {/* 회원가입 STEP 3 */}
                        <div className="title-box">
                            <img src={iconGoogle} alt="" />
                            <h1>Gmail 주소 선택하기</h1>
                            <p>Gmail 새 주소를 만드세요.</p>
                        </div>                            
                        <div className="input-box">
                            <ul className="input-list type1">
                                <li>
                                    <p>내 Gmail 주소 만들기</p>
                                    <input type="text" placeholder='Gmail 주소 만들기'/>
                                    <p>문자, 숫자, 마침표를 사용할 수 있습니다.</p>
                                </li>
                            </ul>
                            <div className="btn-box"><button>다음</button></div>                            
                        </div>

                        {/* 회원가입 STEP 4 */}
                        <div className="title-box">
                            <img src={iconGoogle} alt="" />
                            <h1>안전한 비밀번호 만들기</h1>
                            <p>문자, 숫자, 기호를 조합하여 안전한 비밀번호를 만드세요.</p>
                        </div>                            
                        <div className="input-box">
                            <ul className="input-list type1">
                                <li>
                                    <input type="text" placeholder='비밀번호'/>
                                </li>
                                <li>
                                    <input type="text" placeholder='확인'/>
                                    <input type="checkbox" name="비밀번호 표시" id="" />
                                </li>
                            </ul>
                            <div className="btn-box"><button>다음</button></div>                            
                        </div>

                        {/* 회원가입 STEP 5 */}
                        <div className="title-box">
                            <img src={iconGoogle} alt="" />
                            <h1>계정정보 검토</h1>
                        </div>                            
                        <div className="input-box">
                            <ul className="input-list type1">
                                <li>
                                    <p>이름정보</p>    
                                    <p>이메일정보</p>    
                                </li>
                            </ul>
                            <div className="btn-box"><button>다음</button></div>                            
                        </div>     
                        {/* 회원가입 STEP 6 */}
                        <div className="title-box">
                            <img src={iconGoogle} alt="" />
                            <h1>회원가입 완료</h1>
                        </div>                            
                        <div className="input-box">
                            <div className="btn-box"><button>Youtube로 이동하기</button></div>                            
                        </div>                                             

                        {/* 원래는 핸드폰 인증까지 있는데, 생략후 로그인완료라고 하겠음 */}
                        {/* 
                            1. select 박스 디자인
                            2. checkbox 디자인
                            3.                        
                        */}

                    </div>
                    <div className="language-box">
                        <select name="" id="">
                            <option value="">한국어</option>
                            <option value="">English</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}