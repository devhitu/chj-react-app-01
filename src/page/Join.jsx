import React from 'react';
import PageHeader from '../component/PageHeader';
import PageFooter from '../component/PageFooter';

export default function Join() {
    return (
        <>
            <PageHeader />
            <div className='sub-wrap join'>
                <div className="inner">
                    <div className="join-box">
                        {/* 전체동의 클릭시 다른 체크박스들도 체크되는 로직 구현하기 */}
                        <div>
                            <label for="agree-all">
                                <input type="checkbox" name="agree-all" id="agree-all" />
                                <span class="checkmark"></span>전체 동의하기
                            </label>
                        </div>
                        <div>
                            <label for="agree-service"> <input type="checkbox" name="agree-service" id="agree-service" />
                                <span class="checkmark"></span>
                                <span className="essential">[필수] </span>이용약관
                            </label>
                        </div>
                        <div>
                            <label for="agree-privacy">
                                <input type="checkbox" name="agree-privacy" id="agree-privacy" />
                                <span class="checkmark"></span>
                                <span className="essential">[필수] </span> 개인정보 수집 및 이용
                            </label>
                        </div>
                        <div>
                            <label for="agree-realname">
                                <input type="checkbox" name="agree-realname" id="agree-realname" />
                                <span class="checkmark"></span>
                                <span className="optional">[선택]</span> 실명 인증된 아이디로 가입
                            </label>
                        </div>
                        <div>
                            <label for="agree-locate">
                                <input type="checkbox" name="agree-locate" id="agree-locate" />
                                <span class="checkmark"></span>
                                <span className="optional">[선택]</span> 위치기반서비스 이용약관
                            </label>
                        </div>
                        <div>
                            <label for="agree-collect">
                                <input type="checkbox" name="agree-collect" id="agree-collect" />
                                <span class="checkmark"></span>
                                <span className="optional">[선택]</span> 개인정보 수집 및 이용
                            </label>
                        </div>
                        <button>다음</button>
                    </div>
                </div>
            </div>
            <PageFooter />
        </>
    )
}