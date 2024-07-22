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
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
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

    // const onYearChange = (e) => {
    //     setYear(e.target.value);
    // };
    
    const onMonthChange = (e) => {
        setMonth(e.target.value);
    };
    
    const onDayChange = (e) => {
        setDay(e.target.value);
    };
    
    const onGenderChange = (e) => {
        setGender(e.target.value);
    };



    //월, 일 계산
    const Months = [
        { value: 1, label: '1월' },
        { value: 2, label: '2월' },
        { value: 3, label: '3월' },
        { value: 4, label: '4월' },
        { value: 5, label: '5월' },
        { value: 6, label: '6월' },
        { value: 7, label: '7월' },
        { value: 8, label: '8월' },
        { value: 9, label: '9월' },
        { value: 10, label: '10월' },
        { value: 11, label: '11월' },
        { value: 12, label: '12월' }
    ];
    
    const daysInMonth = (year, month) => {
        //new Date(2024,4,0) => 24.5월의 마지막 날 반환
        return new Date(year, month).getDate(); 
    };
    
    const currentYear = new Date().getFullYear();
    const regex = new RegExp(`^(19[0-9]{2}|20[0-${currentYear - 2000}])$`);
    
    const handleYearChange = (e) => {
        const inputYear = e.target.value; // 입력한 연도
        if (regex.test(inputYear)) {
            setYear(inputYear); // 연도 설정
            if (month) { // 사용자가 월을 선택했을 때만 실행
                const days = daysInMonth(inputYear, month); // 해당 연도와 월의 마지막 날짜 계산
                if (day > days) {
                    setDay(''); // 선택된 일자 초기화
                }
            }
        } else {
            alert('올바른 연도를 입력해주세요.');
        }
    };
    const handleMonthChange = (e) => {
        const selectedMonth = parseInt(e.target.value);
        setMonth(selectedMonth);
        // 현재 선택된 연도를 가져와서 해당 월의 일수를 계산
        if (year) {
            const days = daysInMonth(year, selectedMonth);
            // 현재 선택된 일자가 유효하지 않으면 초기화
            if (day > days) {
                setDay('');
            }
        }
    };

    const renderDays = () => {
        if (!year || !month) {
            return <option value="">일</option>;
        }
        const days = daysInMonth(year, month);
        return Array.from({ length: days }, (_, i) => i + 1).map((day) => (
            <option key={day} value={day}>
                {day}
            </option>
        ));
    };

    //다음단계 버튼 클릭
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            if (currentStep < 6) { //마지막단계 아닐경우만 
                setCurrentStep(currentStep + 1);
            }
        }
    };

    const handleNextStep = async () => {
        await requestSave();
        setCurrentStep(6);
    };    

    const requestSave = async () => {
        // if (firstName.length === 0) {
        //     alert('성을 기입해주세요.');
        //     return;
        // }
        if (lastName.length === 0) {
            alert('이름을 기입해주세요.');
            return;
        }

        var response = await axios.post('', null, {
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
                            <li><input type="text" placeholder='연' value={year} onChange={handleYearChange} /></li>
                            <li>
                                <select value={month} onChange={handleMonthChange}>
                                    <option value="">월</option>
                                    {Months.map((m) => (
                                        <option key={m.value} value={m.value}>
                                            {m.label}
                                        </option>
                                    ))}
                                </select>
                            </li>
                            <li>
                                <select value={day} onChange={(e) => setDay(parseInt(e.target.value))}>
                                    <option value="">일</option>
                                    {renderDays()}
                                </select>
                            </li>
                            <li>
                                <select name="" id="" value={gender} onChange={onGenderChange}>
                                    <option value="">성별</option>
                                    <option value="여자">여자</option>
                                    <option value="남자">남자</option>
                                    <option value="공개안함">공개안함</option>
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
