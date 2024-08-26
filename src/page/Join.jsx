import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useJoinUserStore from '../store/useJoinUserStore';
import iconGoogle from '../res/img/icons/icon_google.svg';

export default function Join() {
    const joinUserStore = useJoinUserStore();

    const [step, setStep] = useState(1);
    const navigate = useNavigate();  // useNavigate 훅 사용

    // step1
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    // step2
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [gender, setGender] = useState('');
    // step3
    const [id, setId] = useState('');
    // step4
    const [pw, setPw] = useState('');
    const [confirmPw, setConfirmPw] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    // step5
    const [tel, setTel] = useState('');
    const [confirmTel, setConfirmTel] = useState('');
    const [authCode, setAuthCode] = useState('');

    // step1 handlers
    const handleFirstName = (e) => setFirstName(e.target.value.trim());
    const handleLastName = (e) => setLastName(e.target.value.trim());

    // step2 handlers
    const handleYearChange = (e) => setYear(e.target.value.trim());

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

    const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    const daysInMonth = (year, month) => {
        const daysInMonth = new Date(year, month, 0).getDate();
        if (month === 2 && isLeapYear(year)) {
            return 29;
        }
        return daysInMonth;
    };

    const handleMonthChange = (e) => {
        const value = parseInt(e.target.value);
        setMonth(value);

        const days = daysInMonth(parseInt(year), value);
        if (day > days) {
            setDay(''); // 선택된 일자 초기화
        }
    };

    const renderDays = () => {
        if (!year || !month) return <option value="">일</option>;

        const daysInSelectedMonth = daysInMonth(parseInt(year, 10), parseInt(month, 10));
        return Array.from({ length: daysInSelectedMonth }, (_, i) => (
            <option key={i + 1} value={i + 1}>{i + 1}일</option>
        ));
    };

    const handleDayChange = (e) => setDay(parseInt(e.target.value));

    const handleGenderChange = (e) => setGender(e.target.value.trim());

    // step3 handlers
    const handIdChange = (e) => setId(e.target.value.trim());

    // step4 handlers
    const handlePwChange = (e) => setPw(e.target.value.trim());
    const handleConfirmPwChange = (e) => setConfirmPw(e.target.value.trim());
    const toggleShowPassword = () => setShowPassword(!showPassword);

    // step5 handlers
    const handleConfirmTelChange = (e) => setConfirmTel(e.target.value.trim());

    const handleAuthProcess = async (action) => {
        try {
            if (action === 'request') {
                // 인증번호 요청
                // 예시 http://3.36.28.140:8080/chj_react_restapi/api/auth/telAuth?tel=01022223333
                const responseAuth = await axios.get('http://3.36.28.140:8080/chj_react_restapi/api/auth/telAuth', {
                    params:{
                        tel: tel,
                    }
                });
    
                const receivedAuthCode = responseAuth.data;
                console.log(receivedAuthCode)
                setAuthCode(receivedAuthCode); // 받은 인증번호 저장
    
                alert('인증번호가 발송되었습니다. 확인 후 입력해주세요.');
                
            } else if (action === 'verify') {
                // 인증번호 검증
                // alert(authCode+','+confirmTel)
                if (confirmTel.toString() === authCode.toString()) {
                    alert('인증이 완료되었습니다.');
                    setStep(6); // 다음 단계로 이동
                    await requestSave(); //저장
                } else {
                    alert('인증번호가 유효하지 않습니다.');
                }
            }
        } catch (error) {
            if (action === 'request') {
                console.error('인증번호 요청 오류:', error.response ? error.response.data : error.message);
            } else if (action === 'verify') {
                console.error('인증번호 확인 오류:', error.response ? error.response.data : error.message);
            }
        }
    };

    const handleNextStepOrKeyPress = async (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            e.preventDefault(); // 기본 동작을 막음
            
            switch (step) {
                case 1:
                    if (!firstName) {
                        alert('이름을 입력해주세요.');
                    } else {
                        setStep(2);
                    }
                    break;
                case 2:
                    if (!year || year < 1900 || year > new Date().getFullYear()) {
                        alert('올바른 연도를 입력해주세요.'); 
                        setYear(''); // 연도 초기화
                    } else if (!month) {
                        alert('월을 선택해주세요.');
                    } else if (!day) {
                        alert('일을 선택해주세요.');
                    } else if (!gender) {
                        alert('성별을 선택해주세요.');
                    } else {
                        setStep(3);                                             
                    }
                    break;
                case 3:
                    if (!id) {
                        alert('주소를 작성해주세요.');
                    } else if (!(/^(?=.*[a-zA-Z])(?=.*\d).{4,}$/.test(id))) {
                        alert('주소는 영문자와 숫자의 4자 이상의 조합이어야 합니다.');
                    } else {
                        setStep(4);
                    }
                    break;
                case 4:
                    if (!pw) {
                        alert('비밀번호를 작성해주세요.');
                    } else if (!(/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(pw))) {
                        alert('비밀번호는 영문자와 숫자의 8자 이상의 조합이어야 합니다.');
                    } else if (confirmPw !== pw) {
                        alert('이전 비밀번호와 같지않습니다.');
                    } else {
                        setStep(5);
                    }
                    break;
                case 5:
                    if (!tel) {
                        alert('연락처를 기입해주세요.');
                    } else if (!confirmTel) {
                        alert('인증번호를 입력해주세요.');
                    } else {
                        await handleAuthProcess();
                    }
                    break;
                case 6:
                    break;
                default:
                    break;
            }
        }        
    };

    const requestSave = async () => {
        try {
            const birth = `${year}${month}${day}`;

            const responseSave = await axios.post('http://3.36.28.140:8080/chj_react_restapi/api/user/save', null, {
                params: {
                    f: firstName,
                    l: lastName,
                    b: birth,
                    g: gender,
                    id: id,
                    pw: pw,
                    tel: tel,
                    nick: "",
                }
            });
            alert(responseSave.data); //ok
        } catch (error) {
            console.error('Error saving user:', error.response ? error.response.data : error.message);
        }
    };

    
    var form;
    switch (step) {
        case 1: 
            form = (
                <div>
                    <div className="join-box">
                        <div className="title-box">
                            <img src={iconGoogle} alt="" />
                            <h1>Google 계정 만들기</h1>
                            <p>이름을 입력하세요</p>
                        </div>
                        <div className="input-box">
                            <ul className="input-list">
                                <li>
                                    <input type="text" placeholder='성(선택사항)' value={lastName} onChange={handleLastName} />
                                </li>
                                <li>
                                    <input type="text" placeholder='이름' value={firstName} onChange={handleFirstName} onKeyPress={handleNextStepOrKeyPress} />
                                </li>
                            </ul>
                            <div className="btn-box">
                                <button onClick={handleNextStepOrKeyPress}>다음</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
            break;
        case 2: 
            form = (
                <div className="join-box">
                    <div className="title-box">
                        <img src={iconGoogle} alt="" />
                        <h1>기본 정보</h1>
                        <p>생일과 성별을 입력하세요</p>
                    </div>
                    <div className="input-box">
                        <ul className="input-list">
                            <li className="w-33">
                                <input
                                    type="text"
                                    placeholder='연'
                                    value={year}
                                    onChange={handleYearChange}
                                />
                            </li>
                            <li className="w-33">
                                <select value={month} onChange={handleMonthChange}>
                                    <option>월</option>
                                    {Months.map((m) => (
                                        <option key={m.value} value={m.value}>
                                            {m.label}
                                        </option>
                                    ))}
                                </select>
                            </li>
                            <li className="w-33">
                                <select value={day} onChange={handleDayChange}>
                                    <option>일</option>
                                    {renderDays()}
                                </select>
                            </li>
                            <li>
                                <select name="" id="" value={gender} onChange={handleGenderChange} onKeyPress={handleNextStepOrKeyPress}>
                                    <option>성별</option>
                                    <option value="w">여자</option>
                                    <option value="m">남자</option>
                                    <option value="공개안함">공개안함</option>
                                </select>
                            </li>
                        </ul>
                        <div className="btn-box">
                            <button onClick={handleNextStepOrKeyPress}>다음</button>
                        </div>
                    </div>
                </div>
            );
            break;
        case 3: 
            form = (
                <div className="join-box">
                    <div className="title-box">
                        <img src={iconGoogle} alt="" />
                        <h1>Gmail 주소 선택하기</h1>
                        <p>Gmail 새 주소를 만드세요.</p>
                    </div>
                    <div className="input-box">
                        <ul className="input-list ">
                            <li>
                                <input
                                    className="id"
                                    type="text"
                                    placeholder='주소를 적어주세요'
                                    value={id}
                                    onChange={handIdChange}
                                    onKeyPress={handleNextStepOrKeyPress} 
                                />
                                <span className="mail_txt">gmail.com</span>
                            </li>
                        </ul>
                        <div className="btn-box">
                            <button onClick={handleNextStepOrKeyPress}>다음</button>
                        </div>
                    </div>
                </div>
            );
            break;
        case 4: 
            form = (
                <div className="join-box">
                    <div className="title-box">
                        <img src={iconGoogle} alt="" />
                        <h1>안전한 비밀번호 만들기</h1>
                        <p>문자, 숫자, 기호를 조합하여 안전한 비밀번호를 만드세요.</p>
                    </div>
                    <div className="input-box">
                        <ul className="input-list">
                            <li>
                                <input 
                                    type={showPassword ? 'text' : 'password'} 
                                    placeholder='비밀번호' 
                                    value={pw} 
                                    onChange={handlePwChange} 
                                />
                            </li>
                            <li>
                                <input 
                                    type={showPassword ? 'text' : 'password'} 
                                    placeholder='확인' 
                                    value={confirmPw} 
                                    onChange={handleConfirmPwChange} 
                                />
                                <div className="showPassword-box">
                                    <label htmlFor="showPasswordCheckbox">
                                        <input 
                                            type="checkbox" 
                                            id="showPasswordCheckbox"
                                            onChange={toggleShowPassword}
                                            onKeyPress={handleNextStepOrKeyPress} 
                                        />
                                        <span>비밀번호 표시</span>
                                    </label>
                                </div>
                            </li>
                        </ul>
                        <div className="btn-box">
                            <button onClick={handleNextStepOrKeyPress}>다음</button>
                        </div>
                    </div>
                </div>
            );
            break;
        case 5: 
            form = (
                <div className="join-box">
                    <div className="title-box">
                        <img src={iconGoogle} alt="" />
                        <h1>인증문자 입력</h1>
                    </div>
                    <div className="input-box">
                        <ul className="input-list ">
                            <li>
                                <input 
                                    type="text" 
                                    placeholder='전화번호' 
                                    value={tel} 
                                    onChange={(e) => setTel(e.target.value.trim())} 
                                />
                            </li>
                            <li className='receiveNum-box '>
                                <input 
                                    type="text" 
                                    placeholder='인증번호' 
                                    value={confirmTel} 
                                    onChange={handleConfirmTelChange} 
                                />
                                <button onClick={() => handleAuthProcess('request')}>인증 번호 받기</button>
                            </li>
                        </ul>
                        <div className="btn-box">
                            <button onClick={() => handleAuthProcess('verify')}>다음</button>
                        </div>
                    </div>
                </div>
            );
            break;
        case 6: 
            form = (
                <div className="join-box step6">
                    <div className="title-box">
                        <img src={iconGoogle} alt="" />
                        <h1>회원가입 완료</h1>
                        <p>회원가입이 완료되었습니다.</p>
                    </div>
                    <div className="input-box">
                        <ul className="input-list">
                            <li>회원아이디 : <strong>{id}@gamil.com</strong></li>
                        </ul>
                        <div className="btn-box">
                            <button onClick={() => navigate('/main')}>Youtube로 이동하기</button>
                        </div>
                    </div>
                </div>
            );
            break;
        default:
            break;
    }
    
    return (
        <div className='sub-wrap join'>
            <div className="inner">
                {form}
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
