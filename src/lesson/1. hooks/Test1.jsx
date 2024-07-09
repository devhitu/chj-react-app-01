import { useEffect, useState } from "react"

export default function Test1(){
    const [step, setStep] = useState();


    //const [변수, 함수] = useState('초기값');
    const [txt, setTxt] = useState('a'); 
    const [toggle, setToggle] = useState(true); 

    const [inpValue, setInpValue] = useState('')


    const [pw, setPw] = useState('')
    const [pw1, setPw1] = useState('')

    //컴포넌트가 보여질때 초기화 => 빈배열[]
    useEffect(()=>{
        // alert('데이터 호출')
    },[]);

    useEffect(()=>{
        // alert('텍스트변경감지') //처음로드 1번, 변경시 1번 ex.패스워드 비교시
    },[txt])

    function handlerClick(){
        setTxt(inpValue)
        // alert('텍스트변경감지')
    }
    // function handlerClick2(){
    //     setToggle(!toggle)
    // }

    function handlerInput(e){
        console.log(e.target.value);
        setInpValue(e.target.value)
    }

    function handlerPw(e){
       setPw(e.target.value)
       if(pw=pw1){

       }else{
        
       }
    }
    function handlerPw1(e){
        setPw1(e.target.value)
        if(pw=pw1){

        }else{
         
        }
    }


    return(
        <>
  
            <div>
                <input value={pw} onChange={(e)=>handlerPw(e)}/>
                <input value={pw1} onChange={(e)=>handlerPw1(e)}/>



                {txt =='a' ? <div>a입니다.</div> : <div>a아닙니다.</div>}
                <input value={inpValue} onChange={(e)=>{handlerInput(e)}}/>
                <span className="{}">{txt}</span>
                <button onClick={handlerClick}>버튼</button>
            </div>
        </>
    )

}