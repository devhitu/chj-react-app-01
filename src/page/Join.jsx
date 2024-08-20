import axios from 'axios';
import {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useJoinUserStore from '../store/useJoinUserStore';
import iconGoogle from '../res/img/icons/icon_google.svg';

export default function Join(){
    const joinUserStore = useJoinUserStore();

    const [step,setStep] = useState(1);
    const navigate = useNavigate();  // useNavigate 훅 사용

    // step1
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    // step2
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [gender, setGender] = useState('');
    //step3
    const [id, setId] = useState('');
    //step4
    const [pw, setPw] = useState('');
    const [confirmPw, setConfirmPw] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    //step5
    const [tel, setTel] = useState('');
    const [confirmTel, setConfirmTel] = useState('');
    

    //step1
    const handleFirstName = (e) => {
        const value = e.target.value.trim();
        setFirstName(value); 
        // joinUserStore.setFirstName(value); 
    };
    
    const handleLastName = (e) => {
        const value = e.target.value.trim();
        setLastName(value); 
    };

    //step2 월, 일 계산
    const handleYearChange = (e) => {
        const value = e.target.value.trim();
        setYear(value); 
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

    const isLeapYear = (year) => { //윤년
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    };    
    const daysInMonth = (year, month) => { // 월에 따른 일수 계산
        const daysInMonth = new Date(year, month, 0).getDate();
        if (month === 2 && isLeapYear(year)) { // 윤년
            return 29;
        }
        return daysInMonth;
    };     

    const handleMonthChange = (e) => {
        const value = parseInt(e.target.value);
        setMonth(value); 
        
        const days = daysInMonth(parseInt(year), value); // 해당 연도와 월의 마지막 날짜 계산
        if (day > days) {
            setDay(''); // 선택된 일자 초기화
        }
    };

    // 연도와 월에 따라 동적으로 일자 선택 옵션 렌더링 => 입력에 따라서 비교X, 입력후 월을 고를때 올바른 년도인지 판별!!
    const renderDays = () => {
        if (!year || !month) return <option value="">일</option>;
    
        const daysInSelectedMonth = daysInMonth(parseInt(year, 10), parseInt(month, 10));
        const options = [];
    
        for (let i = 1; i <= daysInSelectedMonth; i++) {
            options.push(
                <option key={i} value={i}>
                    {i}일
                </option>
            );
        }
        return options;
    };

    const handleDayChange = (e) => {
        const value = parseInt(e.target.value);
        setDay(value); 
    };    

    const handleGenderChange = (e) => {
        const value = e.target.value.trim();
        setGender(value);        
    };
    //step3
    const handIdChange = (e) => {
        const value = e.target.value.trim();
        setId(value);        
    };
    //step4
    const handlePwChange = (e) => {
        const value = e.target.value.trim();
        setPw(value);        
    };

    const handleConfirmPwChange = (e) => {
        const inputValue = e.target.value.trim();
        setConfirmPw(inputValue);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };    
    //step5
    const handleTelChange = (e) => {
        const value = e.target.value.trim();
        setTel(value);  
    };
    // const handleConfirmTelChange = (e) => {
    //     const inputValue = e.target.value.trim();
    //     setConfirmTel(inputValue);
    // };


    const handleNextStepOrKeyPress = async (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            e.preventDefault(); // 기본 동작을 막음
            
            switch (step) {
                case 1:
                    if (!firstName) {
                        alert('이름을 입력해주세요.');
                    }
                    else{
                        setStep(2);
                    }
                    break;
                case 2:
                    // 미입력 or 1900 미만 or 현재년도 초과
                    if (!year || year < 1900 || year > new Date().getFullYear()) {
                        alert('올바른 연도를 입력해주세요.'); 
                        setYear(''); // 연도 초기화
                    }
                    else if (!month) {
                        alert('월을 선택해주세요.');
                    }
                    else if (!day) {
                        alert('일을 선택해주세요.');
                    }
                    else if (!gender) {
                        alert('성별을 선택해주세요.');
                    }              
                    else{
                        setStep(3);                                             
                    }
                    break;
                case 3:{
                    if (!id) {
                        alert('주소를 작성해주세요.');
                    }
                    else if (!(/^(?=.*[a-zA-Z])(?=.*\d).{4,}$/.test(id))){
                        alert('주소는 영문자와 숫자의 4자 이상의 조합이어야 합니다.');
                    }
                    else{
                        setStep(4);
                    }
                    break;
                }
                case 4:{
                    if (!pw) {
                        alert('비밀번호를 작성해주세요.');
                    }
                    else if (!(/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(pw))){
                        alert('비밀번호는 영문자와 숫자의 8자 이상의 조합이어야 합니다.');
                    }
                    else if (confirmPw !== pw){
                        alert('이전 비밀번호와 같지않습니다.');
                    }
                    else{
                        setStep(5);
                    }
                    break;
                }
                case 5:{
                    if (!tel) {
                        alert('연락처를 기입해주세요.');
                    }
                    else if (confirmTel !== tel){
                        alert('인증번호가 유효하지 않습니다.');
                    }else{
                        setStep(6);
                        await requestSave(); // 데이터 저장  요청   
                    }
                    break;
                }
                case 6:{
                    
                    break;
                }
                default:
                    break;
            }
        }        
    }

    const requestAuth = async () => {
        try{
            const reponse = await axios.get('http://3.36.28.140:8080/chj_react_restapi/api/auth/telAuth', null,{
                params:{
                    telAuth: tel,
                }
            })
            alert(reponse.telAuth)
            confirmTel(reponse.telAuth)
        }catch(error){
            console.error('Error saving user:', error.response ? error.response.data : error.message);
        }
    }

    const requestSave = async () => {
        // alert('ddd')
        try {
            // const state = useJoinUserStore.getState();
            // const { firstName, lastName, year, month, day, gender, id, pw, tel } = state.joinUser;
            const birth = `${year}${month}${day}`;

            const response = await axios.post('http://3.36.28.140:8080/chj_react_restapi/api/user/save', null, {
                params: {
                    f: firstName,
                    l: lastName,
                    b: birth,
                    g: gender,
                    id: id,
                    pw: pw,
                    tel: tel,
                    nick:"",
                }
            });
            alert(response.data); //ok
        }catch(error){
            console.error('Error saving user:', error.response ? error.response.data : error.message);
        }
    };

    var form;
    switch(step){
        case 1: 
            form=(
                <div>
                    <div className="join-box">
                        <div className="title-box">
                            <img src={iconGoogle} alt="" />
                            <h1>Google 계정 만들기</h1>
                            <p>이름을 입력하세요</p>
                        </div>
                        <div className="input-box">
                            <ul className="input-list type1">
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
            )
            break;
        case 2: 
            form=(
                <div className="join-box">
                    <div className="title-box">
                        <img src={iconGoogle} alt="" />
                        <h1>기본 정보</h1>
                        <p>생일과 성별을 입력하세요</p>
                    </div>
                    <div className="input-box">
                        <ul className="input-list type3">
                            <li>
                                <input
                                    type="text"
                                    placeholder='연'
                                    value={year}
                                    onChange={handleYearChange}
                                    // ref={yearInputRef} // ref를 지정합니다.
                                />
                            </li>
                            <li>
                                <select value={month} onChange={handleMonthChange}>
                                    <option>월</option>
                                    {Months.map((m) => (
                                        <option key={m.value} value={m.value}>
                                            {m.label}
                                        </option>
                                    ))}
                                </select>
                            </li>
        
                            <li>
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
            )
            break;
        case 3: 
            form=(
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
            )
            break;
        case 4: 
            form=(
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
                                    onChange={handlePwChange} 
                                />
                            </li>
                            <li>
                                <input type={showPassword ? 'text' : 'password'} placeholder='확인' value={confirmPw} onChange={handleConfirmPwChange} />
                                <label htmlFor="showPasswordCheckbox">
                                    <input type="checkbox" id="showPasswordCheckbox" 
                                    onChange={toggleShowPassword}
                                    onKeyPress={handleNextStepOrKeyPress} />
                                    <span>비밀번호 표시</span>
                                </label>
                            </li>
                        </ul>
                        <div className="btn-box">
                            <button onClick={handleNextStepOrKeyPress}>다음</button>
                        </div>
                    </div>
                </div>
            )
            break;
        case 5: 
            form=(
                <div className="join-box">
                    <div className="title-box">
                        <img src={iconGoogle} alt="" />
                        <h1>보안문자 입력</h1>
                    </div>
                    <div className="input-box">
                        <ul className="input-list type1">
                            <li>
                                <input type="text" placeholder='전화번호' value={tel} onChange={handleTelChange} />
                            </li>
                            <li>
                                <input type="text" placeholder='인증번호' 
                                value={confirmTel} 
                                // onChange={handleConfirmTelChange} 
                                onKeyPress={handleNextStepOrKeyPress} />
                            </li>
                        </ul>
                        <div className="btn-box">
                            <button onClick={requestAuth}>인증 번호 받기</button>
                            <button onClick={handleNextStepOrKeyPress}>다음</button>
                        </div>
                    </div>
                </div>
            )
            break;
        case 6: 
            form=(
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
                        <div className="btn-box"> <button onClick={() => navigate('/main')}>Youtube로 이동하기</button></div>
                    </div>
                </div>
            )
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