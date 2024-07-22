import React, { useState } from 'react';
import iconGoogle from '../res/img/icons/icon_google.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Join() {
    const navigate = useNavigate();  // useNavigate 훅 사용

    const [currentStep, setCurrentStep] = useState(1);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birth, setBirth] = useState('');
    // const [year, setYear] = useState('');
    // const [month, setMonth] = useState('');
    // const [day, setDay] = useState('');
    const [gender, setGender] = useState('');
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [tel, setTel] = useState('');

    const onFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const onLastName = (e) => {
        setLastName(e.target.value);
    };

    //enter key press go next steps
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            // 현재 단계가 마지막 단계가 아닌 경우에만 다음 단계로 이동
            if (currentStep < 6) {
                setCurrentStep(currentStep + 1);
            }
        }
    };


    const handleNextStep = async () => {
        await requestSave();
        setCurrentStep(6);
    };


    const months = Array.from({ length: 12 }, (_, i) => i + 1);


    const requestSave = async () => {
        if (firstName.length === 0) {
            alert('성을 기입해주세요.');
            return;
        }
        if (lastName.length === 0) {
            alert('이름을 기입해주세요.');
            return;
        }

        var response = await axios.post('http://3.36.28.140:8080/chj_react_restapi/api/user/save', null, {
            params: {
                f: firstName,
                l: lastName,
                id: id,
                pw: pw,
                g: gender,
                tel: tel,
                b: birth,
                nick: '8'
            }
        });

        alert(response.data); //ok
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="join-box">
                        <div className="title-box">
                            <img src={iconGoogle} alt="" />
                            <h1>Google 계정 만들기</h1>
                            <p>이름을 입력하세요</p>
                        </div>
                        <div className="input-box">
                            <ul className="input-list type1">
                                <li>
                                    <input type="text" placeholder='성(선택사항)' value={firstName} onChange={onFirstName} />
                                </li>
                                <li>
                                    <input type="text" placeholder='이름' value={lastName} onChange={onLastName} onKeyPress={handleKeyPress} />
                                </li>
                            </ul>
                            <div className="btn-box">
                                <button onClick={() => setCurrentStep(currentStep + 1)}>다음</button>
                            
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="join-box">
                        <div className="title-box">
                            <img src={iconGoogle} alt="" />
                            <h1>기본 정보</h1>
                            <p>생일과 성별을 입력하세요</p>
                        </div>
                        <div className="input-box">
                            <ul className="input-list type3">
                                <li><input type="text" placeholder='연' value={year} /></li>
                                <li>
                                    <select name="month" id="">
                                        <option value="">월</option>
                                        {months.map((month) => (
                                            <option key={month} value={month}>
                                                {month}
                                            </option>
                                        ))}
                                    </select>
                                </li>
                                <li>
                                    <select name="" id="">
                                        <option value="">일</option>
                                        <option value="">1</option>
                                        <option value="">2</option>
                                    </select>
                                </li>
                                <li>
                                    <select name="" id="">
                                        <option value="">성별</option>
                                        <option value="">여자</option>
                                        <option value="">남자</option>
                                        <option value="">공개안함</option>
                                    </select>
                                </li>
                            </ul>
                            <div className="btn-box">
                                {currentStep > 1 && <button onClick={() => setCurrentStep(currentStep - 1)}>뒤로</button>}   
                                                                
                                <button onClick={() => setCurrentStep(3)}>다음</button>

                            </div>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="join-box">
                        <div className="title-box">
                            <img src={iconGoogle} alt="" />
                            <h1>Gmail 주소 선택하기</h1>
                            <p>Gmail 새 주소를 만드세요.</p>
                        </div>
                        <div className="input-box">
                            <ul className="input-list type1">
                                <li>
                                    <input type="text" placeholder=''/>
                                </li>
                                
                            </ul>
                            <div className="btn-box">
                                {currentStep > 1 && <button onClick={() => setCurrentStep(currentStep - 1)}>뒤로</button>}   
                                <button onClick={() => setCurrentStep(4)}>가입하기</button>
                            </div>
                        </div>
                    </div>
                );
            case 4:
                return(
                    <div className="join-box">
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
                                    <label htmlFor="">
                                        <input type="checkbox" name="" id="" />
                                        <span>비밀번호 표시</span>
                                    </label>
                                </li>
                            </ul>
                            <div className="btn-box">
                                {currentStep > 1 && <button onClick={() => setCurrentStep(currentStep - 1)}>뒤로</button>}   
                                <button onClick={() => setCurrentStep(5)}>가입하기</button>
                            </div>
                        </div>
                    </div>                    
                );
            case 5:
                return (
                    <div className="join-box">
                        <div className="title-box">
                            <img src={iconGoogle} alt="" />
                            <h1>보안문자 입력</h1>
                        </div>
                        <div className="input-box">
                            <ul className="input-list type1">
                                <li class="flex">
                                    <select name="" id="">
                                        <option value="">한국</option>
                                    </select>
                                    <li>
                                        <input type="text" placeholder='전화번호'/>
                                    </li>
                                    <li>
                                        <input type="text" placeholder='인증번호'/>
                                    </li>
                                </li>
                            </ul>
                            <div className="btn-box">
                                {currentStep > 1 && <button onClick={() => setCurrentStep(currentStep - 1)}>뒤로</button>}   
                                <button onClick={handleNextStep}>다음</button>
                            </div>
                        </div>
                    </div>
                );
            case 6:
                return (
                    <div className="join-box">
                        <div className="title-box">
                            <img src={iconGoogle} alt="" />
                            <h1>회원가입 완료</h1>
                            <p>회원가입이 완료되었습니다.</p>
                        </div>
                        <div className="input-box">
                            <ul className="input-list">
                                <li>회원아이디 `아이디@gamil.com`</li>
                            </ul>
                            <div className="btn-box"> <button onClick={() => navigate('/main')}>Youtube로 이동하기</button></div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className='sub-wrap join'>
            <div className="inner">
                {renderStep()}
                <div className="language-box">
                    <select name="" id="">
                        <option value="">한국어</option>
                        <option value="">English</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
