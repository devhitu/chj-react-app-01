import React, { useState } from 'react';
import iconGoogle from '../res/img/icons/icon_google.svg';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


export default function Join() {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    
    const [birth, setBirth] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [gender, setGender] = useState('');
    
    const [id, setId] = useState('');
    const [isIdValid, setIsIdValid] = useState(true);

    const [pw, setPw] = useState('');
    const [confirmPw, setConfirmPw] = useState('');
    const [isPwValid, setIsPwValid] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const [tel, setTel] = useState('');

    const handleYearChange = (e) => {
        setYear(e.target.value.trim());
    };
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
    const handleMonthChange = (e) => {
        const selectedMonth = parseInt(e.target.value);
        setMonth(selectedMonth);
        
        if (!year || year < 1900 || year > new Date().getFullYear()) {
            alert('올바른 연도를 입력해주세요.');
            setYear('');
            return;
        }
        
        if (day > daysInMonth(year, selectedMonth)) {
            setDay('');
        }
    };

    const handleDayChange = (e) => {
        setDay(parseInt(e.target.value));
    };

    const onGenderChange = (e) => {
        setGender(e.target.value);
    };

    const onId = (e) => {
        setId(e.target.value);
    };

    const onPw = (e) => {
        setPw(e.target.value);
    };

    const onConfirmPwChange = (e) => {
        setConfirmPw(e.target.value);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const validateId = (inputValue) => {
        const pattern = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
        return pattern.test(inputValue);
    };

    const validatePw = (inputValue) => {
        const pattern = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
        return pattern.test(inputValue);
    };

    const daysInMonth = (year, month) => {
        const daysInMonth = new Date(year, month, 0).getDate();
        if (month === 2 && isLeapYear(year)) {
            return 29;
        }
        return daysInMonth;
    };

    const isLeapYear = (year) => {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    };

    const handleNextStepOrKeyPress = async (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            e.preventDefault();

            let isValid = true;
            switch (currentStep) {
                case 1:
                    if (lastName.trim() === '') {
                        alert('이름을 입력해주세요.');
                        isValid = false;
                    }
                    break;
                case 2:
                    if (!year || year < 1900 || year > new Date().getFullYear()) {
                        alert('올바른 연도를 입력해주세요.');
                        isValid = false;
                    }
                    if (!month || !day) {
                        alert('생일을 모두 선택해주세요.');
                        isValid = false;
                    }
                    if (gender === '') {
                        alert('성별을 선택해주세요.');
                        isValid = false;
                    }
                    break;
                case 3:
                    if (id.trim() === '') {
                        alert('주소를 기입해주세요.');
                        isValid = false;
                    }
                    if (!validateId(id)) {
                        alert('주소는 영문자와 숫자의 조합이어야 합니다.');
                        isValid = false;
                    }
                    break;
                case 4:
                    if (pw.trim() === '') {
                        alert('비밀번호를 기입해주세요.');
                        isValid = false;
                    }
                    if (confirmPw.trim() === '') {
                        alert('비밀번호 확인을 기입해주세요.');
                        isValid = false;
                    }
                    if (pw !== confirmPw) {
                        alert('비밀번호와 확인 비밀번호가 일치하지 않습니다.');
                        isValid = false;
                    }
                    if (!validatePw(pw)) {
                        alert('비밀번호는 8자 이상의 영문자와 숫자의 조합이어야 합니다.');
                        isValid = false;
                    }
                    break;
                case 5:
                    if (tel.trim() === '') {
                        alert('연락처를 기입해주세요.');
                        isValid = false;
                    }
                    break;
                default:
                    break;
            }

            if (isValid) {
                try {
                    const birth = `${year}-${month}-${day}`;
                    await requestSave(birth);
                    if (currentStep < 6) {
                        setCurrentStep(currentStep + 1);
                        navigate(`/join/step${currentStep + 1}`);
                    }
                } catch (error) {
                    console.error('Error saving user:', error);
                }
            }
        }
    };

    const handlePrevStep = () => {
        const prevStep = currentStep - 1;
        setCurrentStep(prevStep < 1 ? 1 : prevStep);
        navigate(`/join/step${prevStep}`);
    };

    const requestSave = async (birth) => {
        try {
            const response = await axios.post('', null, {
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
            alert(response.data);
        } catch (error) {
            console.error('Error saving user:', error);
        }
    };

    const renderDays = () => {
        if (!year || !month) return <option value="">일</option>;

        const daysInSelectedMonth = daysInMonth(parseInt(year), parseInt(month));
        return Array.from({ length: daysInSelectedMonth }, (_, index) => (
            <option key={index + 1} value={index + 1}>
                {index + 1}일
            </option>
        ));
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
                                    <input type="text" placeholder='성(선택사항)' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                </li>
                                <li>
                                    <input type="text" placeholder='이름' value={lastName} onChange={(e) => setLastName(e.target.value)} onKeyPress={handleNextStepOrKeyPress} />
                                </li>
                            </ul>
                            <div className="btn-box">
                                <button onClick={handleNextStepOrKeyPress}>다음</button>
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
                                    <select value={day} onChange={handleDayChange}>
                                        {renderDays()}
                                    </select>
                                </li>
                            </ul>
                            <ul className="input-list type2">
                                <li>
                                    <div className="radio-box">
                                        <input type="radio" id="male" name="gender" value="male" checked={gender === 'male'} onChange={onGenderChange} />
                                        <label htmlFor="male">남자</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="radio-box">
                                        <input type="radio" id="female" name="gender" value="female" checked={gender === 'female'} onChange={onGenderChange} />
                                        <label htmlFor="female">여자</label>
                                    </div>
                                </li>
                            </ul>
                            <div className="btn-box">
                                <button onClick={handlePrevStep}>이전</button>
                                <button onClick={handleNextStepOrKeyPress}>다음</button>
                            </div>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="join-box">
                        <div className="title-box">
                            <img src={iconGoogle} alt="" />
                            <h1>기본 정보</h1>
                            <p>주소를 입력하세요</p>
                        </div>
                        <div className="input-box">
                            <ul className="input-list type1">
                                <li>
                                    <input type="text" placeholder='주소 입력' value={id} onChange={onId} onKeyPress={handleNextStepOrKeyPress} />
                                </li>
                            </ul>
                            <div className="btn-box">
                                <button onClick={handlePrevStep}>이전</button>
                                <button onClick={handleNextStepOrKeyPress}>다음</button>
                            </div>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="join-box">
                        <div className="title-box">
                            <img src={iconGoogle} alt="" />
                            <h1>기본 정보</h1>
                            <p>비밀번호를 입력하세요</p>
                        </div>
                        <div className="input-box">
                            <ul className="input-list type1">
                                <li>
                                    <input type={showPassword ? 'text' : 'password'} placeholder='비밀번호 입력' value={pw} onChange={onPw} onKeyPress={handleNextStepOrKeyPress} />
                                    <button type="button" onClick={toggleShowPassword}>
                                        {showPassword ? '숨기기' : '보이기'}
                                    </button>
                                </li>
                                <li>
                                    <input type={showPassword ? 'text' : 'password'} placeholder='비밀번호 확인' value={confirmPw} onChange={onConfirmPwChange} onKeyPress={handleNextStepOrKeyPress} />
                                </li>
                            </ul>
                            <div className="btn-box">
                                <button onClick={handlePrevStep}>이전</button>
                                <button onClick={handleNextStepOrKeyPress}>다음</button>
                            </div>
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div className="join-box">
                        <div className="title-box">
                            <img src={iconGoogle} alt="" />
                            <h1>기본 정보</h1>
                            <p>연락처를 입력하세요</p>
                        </div>
                        <div className="input-box">
                            <ul className="input-list type1">
                                <li>
                                    <input type="text" placeholder='연락처 입력' value={tel} onChange={(e) => setTel(e.target.value)} onKeyPress={handleNextStepOrKeyPress} />
                                </li>
                            </ul>
                            <div className="btn-box">
                                <button onClick={handlePrevStep}>이전</button>
                                <button onClick={handleNextStepOrKeyPress}>완료</button>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            {renderStep()}
        </>
    );
}
