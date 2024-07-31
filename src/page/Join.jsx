import {useState} from 'react'
import iconGoogle from '../res/img/icons/icon_google.svg';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import useJoinUserStore from '../store/useJoinUserStore';

export default function Join(){
    var form;
    const [step,setStep] = useState(1);
    const joinUserStore = useJoinUserStore();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    //step1
    const onFirstName = (e) => {
        joinUserStore.setFirstName(setFirstName)
    };

    const onLastName = (e) => {
        joinUserStore.setLastName(setLastName)
    };

    const handleNextStepOrKeyPress = async (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            e.preventDefault(); // 기본 동작을 막음
            
            switch (step) {
                case 1:
                    if (lastName.trim() === '') {
                        alert('이름을 입력해주세요.');
                    }else{
                        setStep(2);
                    }
                    break;
                default:
                    break;
            }
        }        
    }

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
                </div>
            )
            break;
        case 2: 
            form=(
                <div>
                    form2
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