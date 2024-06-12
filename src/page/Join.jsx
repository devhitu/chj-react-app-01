import React from 'react';
import PageHeader from '../component/PageHeader';
import PageFooter from '../component/PageFooter';

export default function Join(){
    return(
        <>
            <PageHeader/>
            <div className='sub-wrap join'>
                <div className="inner">
                    <div className="join-box">
                        <div>
                            <input type="checkbox" name="agree-all" id="agree-all" />
                            <label for="agree-all">전체 동의하기</label>
                        </div>
                        <div>
                            <input type="checkbox" name="agree-service" id="agree-service" />
                            <label for="agree-service"><span className="color_essential">[필수] </span>이용약관</label>
                        </div>
                        <div>
                            <input type="checkbox" name="agree-privacy" id="agree-privacy" />
                            <label for="agree-privacy"><span className="color_essential">[필수] </span> 개인정보 수집 및 이용</label>
                        </div>
                        <div>
                            <input type="checkbox" name="agree-realname" id="agree-realname" />
                            <label for="agree-realname"><span className="optional">[선택]</span> 실명 인증된 아이디로 가입</label>
                        </div>
                        <div>
                            <input type="checkbox" name="agree-locate" id="agree-locate" />
                            <label for="agree-locate"><span className="optional">[선택]</span> 위치기반서비스 이용약관</label>
                        </div>
                        <div>
                            <input type="checkbox" name="agree-collect" id="agree-collect" />
                            <label for="agree-collect"><span className="optional">[선택]</span> 개인정보 수집 및 이용</label>
                        </div>
                        <button>다음</button>
                    </div>
                </div>
            </div>
            <PageFooter/>
        </>
    )
}