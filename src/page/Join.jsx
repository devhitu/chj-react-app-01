import axios from 'axios';
import {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useJoinUserStore from '../store/useJoinUserStore';
import iconGoogle from '../res/img/icons/icon_google.svg';

export default function Join(){
    const [step,setStep] = useState(1);
    // const joinUserStore = useJoinUserStore();
    // const { firstName, lastName, year, month, day, gender, setFirstName, setLastName, setYear, setMonth, setDay, setGender } = useJoinUserStore();

    // step1
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    // step2
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [gender, setGender] = useState('');    

    //step1
    const handleFirstName = (e) => {
        const value = e.target.value.trim();
        setFirstName(value); // Zustand 상태 업데이트
    };
    
    const handleLastName = (e) => {
        const value = e.target.value.trim();
        setLastName(value); // Zustand 상태 업데이트
    };

    //step2 월, 일 계산
    const handleYearChange = (e) => {
        const value = e.target.value.trim();
        setYear(value); // Zustand 상태 업데이트
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
        setMonth(value); // Zustand 상태 업데이트
        
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
        setDay(value); // Zustand 상태 업데이트
    };    

    const handleGenderChange = (e) => {
        const value = e.target.value.trim();
        setGender(value);// Zustand 상태 업데이트        
    };

    const handleNextStepOrKeyPress = async (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            e.preventDefault(); // 기본 동작을 막음
            
            switch (step) {
                case 1:
                    if (!lastName) {
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
                        await requestSave(); // 데이터 저장  요청                        
                    }
                    break;
                default:
                    break;
            }
        }        
    }

    const requestSave = async () => {
        try {
            const state = useJoinUserStore.getState();
            const { firstName, lastName, year, month, day, gender } = state.joinUser;
            const birth = `${year}-${month}-${day}`;

            const response = await axios.post('http://3.36.28.140:8080/chj_react_restapi/api/user/save', null, {
                params: {
                    f: firstName,
                    l: lastName,
                    b: birth,
                    g: gender,
                    id: '',
                    pw: '',
                    tel: '',
                    nick: '8'
                }
            });
            alert(response.data); //ok
        }catch(error){
            console.error('Error saving user:', error);
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
                                    <input type="text" placeholder='성(선택사항)' value={firstName} onChange={handleFirstName} />
                                </li>
                                <li>
                                    <input type="text" placeholder='이름' value={lastName} onChange={handleLastName} onKeyPress={handleNextStepOrKeyPress} />
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
                                <option value="여자">여자</option>
                                <option value="남자">남자</option>
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
                <div>
                    form3
                    <button>다음</button>
                </div>
            )
            break;
        case 4: 
            form=(
                <div>
                    form4
                    <button>다음</button>
                </div>
            )
            break;
        case 5: 
            form=(
                <div>
                    form5
                    <button>다음</button>
                </div>
            )
            break;
        case 6: 
            form=(
                <div>
                    form6
                    <button>다음</button>
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