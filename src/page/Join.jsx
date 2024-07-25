import React, { useState } from 'react';
import iconGoogle from '../res/img/icons/icon_google.svg';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function Join() {
    const navigate = useNavigate();  // useNavigate 훅 사용
    const { step } = useParams(); //step별 파라미터 사용

    const [currentStep, setCurrentStep] = useState(1);
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    
    const [birth, setBirth] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [gender, setGender] = useState('');
    
    const [id, setId] = useState('');
    const [isIdValid, setIsIdValid] = useState(true); // 아이디 유효성 검사 결과 상태    

    const [pw, setPw] = useState('');
    const [confirmPw, setConfirmPw] = useState('');
    const [isPwValid, setIsPwValid] = useState(true); // 아이디 유효성 검사 결과 상태    
    const [showPassword, setShowPassword] = useState(false);

    const [tel, setTel] = useState('');

    const onFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const onLastName = (e) => {
        setLastName(e.target.value);
    };

    //step2 월, 일 계산
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
    
    const isLeapYear = (year) => {
        // 4로 나누어 떨어지지만, 100으로 나누어 떨어지지 않거나 400으로 나누어 떨어지는 연도는 윤년
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    };
    
    const daysInMonth = (year, month) => {
        // JavaScript의 Date 객체는 월 인덱스가 0부터 시작하므로 month에서 1을 빼줍니다.
        const daysInMonth = new Date(year, month, 0).getDate();
    
        // 윤년이면서 2월인 경우, 일 수를 29일로 수정
        if (month === 2 && isLeapYear(year)) {
            return 29;
        }
        return daysInMonth;
    };
    
    
    const currentYear = new Date().getFullYear();

    const handleYearChange = (e) => {
        const inputYear = e.target.value.trim(); // 입력한 연도, trim()으로 앞뒤 공백 제거
        setYear(inputYear); // 입력한 연도 설정
    };


    const handleMonthChange = (e) => {
        const selectedMonth = parseInt(e.target.value);
        setMonth(selectedMonth); // 선택한 월 설정
        
        // 사용자가 연도를 입력하지 않았거나 유효하지 않은 연도인 경우
        if (!year || year < 1900 || year > currentYear) {
            alert('올바른 연도를 입력해주세요.'); // 알림 표시
            setYear(''); // 연도 초기화
            return;
        }
        
        const days = daysInMonth(year, selectedMonth); // 해당 연도와 월의 마지막 날짜 계산
        if (day > days) {
            setDay(''); // 선택된 일자 초기화
        }
    };
    
    // 연도와 월에 따라 동적으로 일자 선택 옵션 렌더링 => 입력에 따라서 비교X, 입력후 월을 고를때 올바른 년도인지 판별!!
    const renderDays = () => {
        if (!year || !month) {
            return <option value="">일</option>;
        }
    
        const daysInSelectedMonth = daysInMonth(parseInt(year), parseInt(month));
        
        return Array.from({ length: daysInSelectedMonth }, (_, index) => {
            const dayValue = index + 1;
            return (
                <option key={dayValue} value={dayValue}>
                    {dayValue}일
                </option>
            );
        });
    };

    // step2 성별선택
    const onGenderChange = (e) => {
        setGender(e.target.value);
    };

    // step3 주소 입력
    const validateId = (inputValue) => {
        const pattern = /^(?=.*[a-zA-Z])(?=.*\d).+$/; // 영문자와 숫자가 적어도 한 번 이상 포함되어야 함
        return pattern.test(inputValue);
    };

    const onId = (e) => {
        const inputValue = e.target.value;
        setId(inputValue);
    };

    // step3, step4 주소, 비밀번호 유효성 검사
    const onBlurIdInput = () => {
        const isValid = validateId(id);
        const idValid2 = validatePw(pw);

        setIsIdValid(isValid);
        setIsPwValid(idValid2);

        // 1차시도 후 불통일때 false(이전true) 한번만 알럿을 띄운다
        // isValid가 false일 때 (즉, 유효하지 않은 아이디일 때) && isIdValid가 true일 때 (즉, 이전에 유효한 아이디였을 때)
        if (!isValid && isIdValid) {
            alert('아이디는 영문자와 숫자의 조합이어야 합니다.');
        }
        if (!idValid2 && isPwValid) {
            alert('비밀번호는 8자 이상의 영문자와 숫자의 조합이어야 합니다.');
        }
    };

    // step4 비밀번호 입력
    const validatePw = (inputValue) => {
        const pattern = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/; // 영문자와 숫자가 적어도 한 번 이상 포함, 8자 이상 되어야 함
        return pattern.test(inputValue);
    };
    const onPw = (e) => {
        const inputValue = e.target.value;
        setPw(inputValue);
    };

    const onConfirmPwChange = (e) => {
        const inputValue = e.target.value;
        setConfirmPw(inputValue);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    // step5 핸드폰 인증


    //다음단계 버튼 클릭
    const handleNextStepOrKeyPress = async (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            e.preventDefault(); // 기본 동작을 막음

            // 스텝별로 필요한 입력값 검증
            switch (currentStep) {
                case 1:
                    if (lastName.trim() === '') {
                        alert('이름을 입력해주세요.');
                        return;
                    }
                    break;
                case 2:
                    if (!year || year < 1900 || year > currentYear) {
                        alert('올바른 연도를 입력해주세요.');
                        return;
                    }
                    if (!month || !day) {
                        alert('생일을 모두 선택해주세요.');
                        return;
                    }
                    if (gender === '') {
                        alert('성별을 선택해주세요.');
                        return;
                    }
                    break;
                case 3:
                    if (id.trim() === '') {
                        alert('주소를 기입해주세요.');
                        return;
                    }
                    break;
                case 4:
                    if (pw.trim() === '') {
                        alert('비밀번호를 기입해주세요.');
                        return;
                    }
                    if (confirmPw.trim() === '') {
                        alert('비밀번호 확인을 기입해주세요.');
                        return;
                    }
                    if (pw !== confirmPw) {
                        alert('비밀번호와 확인 비밀번호가 일치하지 않습니다.');
                        return;
                    }
                    break;
                case 5:
                    if (tel.trim() === '') {
                        alert('연락처를 기입해주세요.');
                        return;
                    }
                    break;
                default:
                    break;
            }

            // API 호출 후 다음 단계로 이동
            try {
                const birth = `${year}-${month}-${day}`;
                await requestSave(birth); // birth 값을 requestSave 함수에 전달
                if (currentStep < 6) {
                    setCurrentStep(currentStep + 1);
                    navigate(`/join/step${currentStep + 1}`);
                }
            } catch (error) {
                console.error('Error saving user:', error);
                // 에러 처리 로직 추가
            }
        }
    };

    
    
    //이전단계 버튼 클릭
    const handlePrevStep = () => {
        const prevStep = currentStep - 1;
        setCurrentStep(prevStep < 1 ? 1 : prevStep); // 최소 단계는 1로 설정
        navigate(`/join/step${prevStep}`);
    };  

    const requestSave = async () => {
       
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
            alert(response.data); //ok
        }catch(error){
            console.error('Error saving user:', error);
        }

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
                                    <input type="text" placeholder='이름' value={lastName} onChange={onLastName} onKeyPress={handleNextStepOrKeyPress} />
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
                                {currentStep > 1 && <button onClick={() => handlePrevStep()}>뒤로</button>}   
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
                            <h1>Gmail 주소 선택하기</h1>
                            <p>Gmail 새 주소를 만드세요.</p>
                        </div>
                        <div className="input-box">
                            <ul className="input-list type1">
                            <li>
                                    <input
                                        type="text"
                                        placeholder='주소를 적어주세요'
                                        value={id}
                                        onChange={onId}
                                        onBlur={onBlurIdInput} // 포커스가 아이디 입력 필드를 벗어났을 때 검사 수행
                                        onKeyPress={handleNextStepOrKeyPress} 
                                    />
                                </li>
                            </ul>
                            <div className="btn-box">
                                {currentStep > 1 && <button onClick={() => handlePrevStep()}>뒤로</button>}   
                                <button onClick={handleNextStepOrKeyPress}>가입하기</button>
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
                                    <input 
                                        type={showPassword ? 'text' : 'password'} 
                                        placeholder='비밀번호' 
                                        value={pw} 
                                        onChange={onPw} 
                                        onBlur={onBlurIdInput} // 포커스가 아이디 입력 필드를 벗어났을 때 검사 수행
                                        onKeyPress={handleNextStepOrKeyPress} 
                                    />
                                </li>
                                <li>
                                    <input type={showPassword ? 'text' : 'password'} placeholder='확인' value={confirmPw} onChange={onConfirmPwChange} />
                                    <label htmlFor="showPasswordCheckbox">
                                        <input type="checkbox" id="showPasswordCheckbox" onChange={toggleShowPassword} />
                                        <span>비밀번호 표시</span>
                                    </label>
                                </li>
                            </ul>
                            <div className="btn-box">
                                {currentStep > 1 && <button onClick={() => handlePrevStep()}>뒤로</button>}   
                                <button onClick={handleNextStepOrKeyPress}>가입하기</button>
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
                                <li>
                                    <input type="text" placeholder='전화번호'/>
                                </li>
                                <li>
                                    <input type="text" placeholder='인증번호'/>
                                </li>
                            </ul>
                            <div className="btn-box">
                                {currentStep > 1 && <button onClick={() => handlePrevStep()}>뒤로</button>}   
                                <button onClick={handleNextStepOrKeyPress}>다음</button>
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
