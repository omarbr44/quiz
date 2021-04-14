import {useState } from 'react';
import './App.css';
import { Tween, SplitChars } from 'react-gsap';

function App() {
 // const show = document.querySelector('body');
 const [show,useShow]=useState(false);
 const Sho =()=>{
   useShow(true);
 }
  const qizArr=[
    {
      Q:"what Is the capital of USA?",
      unCorrect1 :"Los Angeles",
      Correct:"New York",
      unCorrect2 :"California",
      unCorrect3 :"London"
    },
    {
      Q:"what is the capital of KSA?",
      unCorrect1 :"Jeddah",
      unCorrect2 :"Mukalla",
      unCorrect3 :"Dubai",
      Correct:"Ryadh"
    },
    {
      Q:"what is the capital of Australia?",
      Correct:"Canberra",
      unCorrect1 :"Sydney",
      unCorrect2 :"Perth",
      unCorrect3 :"Ottawaa"
    },
    {
      Q:"what is the capital of Jordan?",
      Correct:"Amman",
      unCorrect1 :"Beirut",
      unCorrect2 :"Dubai",
      unCorrect3 :"Doha"
    },
    {
      Q:"what is the capital of UK?",
      unCorrect1 :"Manchester",
      Correct:"London",
      unCorrect2 :"Birmingham",
      unCorrect3 :"Paris"
    }
  ]
  var [counter,useCounter] =useState(0);
  var [counter2,useCounter2] =useState(1);

  const [quiz,useQuiz] =useState(qizArr[0]);
  const [end,useEnd] =useState(true);
  var [points,usePoints] =useState(0);
  var check=0;
    const ChangeQuiz=(e)=>{
      
     if(e.target.innerHTML === quiz.Correct)
      ++check;
        
      usePoints(points + check);
       
       var toEnd = true;
       useCounter2(++counter2);
      
      useCounter(++counter);

      useQuiz(qizArr[counter]);
      if (counter > qizArr.length-1)
      toEnd =false;                           // we cannot use hooks inside if so we did this
      useEnd(toEnd);
     }

 /* useEffect(()=>{
    fetch('https://opentdb.com/api.php?amount=5&category=12&difficulty=easy&type=multiple',{
      crossDomain:true, 
      headers:{
      'Content-Type': 'application/json',}
    }).then(res =>{
      return res.json();
    }).then(data =>{
     console.log(data);
    });
  },[]);*/
  return (
    <div className="App">
       {!show && <Tween from={{ x: '200px' }} stagger={0.1}>
    <SplitChars
      wrapper={<div style={{ display: 'inline-block', fontSize: '40px' }} />}
    >
      Are You Ready ?
    </SplitChars>
  </Tween>
  }{ !show && <Tween to={{ x: '80%', rotation: 180 }} duration={2} ease="back.out(1.7)">
  <div className="square" onClick={Sho} style={{ width: '100px', height: '100px', background: '#1a66dc',borderRadius:'1rem',cursor:"pointer" }}  />
</Tween>}

       { show && end && <h1>Q{counter + 1}</h1>}
    {show && end && 
    <div className="box">
      
       <div className="quiz" >{quiz.Q} </div> 
       <div className="ans1 point"> <button  onClick={ChangeQuiz}>{quiz.unCorrect1}</button></div>
      {counter<2 && <div className="ans2 point" ><button  onClick={ChangeQuiz}>{quiz.Correct}</button></div>}
       <div className="ans3 point" ><button  onClick={ChangeQuiz}>{quiz.unCorrect2}</button></div>
       <div className="ans4 point" ><button  onClick={ChangeQuiz}>{quiz.unCorrect3}</button></div>
       {counter>=2 && <div className="ans2 point" ><button  onClick={ChangeQuiz}>{quiz.Correct}</button></div>}

     </div>}
     {!end && <div className="box got" style={{textAlign: "center",
    display:"block" }}>
       You got {points}/5
       </div>}
    </div>
    
  );
}

export default App;
