/* eslint-disable */
// warning 끄는 명령어

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const post = '강남 우동 맛집';
  const [글제목, 글제목변경] = useState([
    '남자 코트 추천',
    '강남 우동맛집',
    '파이썬독학',
  ]);
  const [따봉, 따봉변경] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(0);
  const [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      
      <button onClick={()=>{ const copy = [...글제목]; copy[0] = '여자코트 추천'; 글제목변경(copy); }}>버튼</button>

      <button onClick={()=>{const copy = [...글제목]; copy.sort(); 글제목변경(copy)}}>가나다순 정렬</button>

      {/* <div className="list">
        <h4>{ 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉+1) } }>👍🏻</span>{따봉}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{ modal == true? setModal(false) : setModal(true) }}>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{ setModal(!modal); setTitle(i) }}>
                { 글제목[i] }
                <span onClick={ (e)=>{ e.stopPropagation; const copy = [...따봉]; copy[i]=copy[i]+1; 따봉변경(copy) } }>👍🏻</span>{따봉[i]}
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={()=>{let copy = [...글제목]; copy.splice(i, 1); 글제목변경(copy)}}>삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e)=>{ 입력값변경(e.target.value) }} />
      <button onClick={()=>{let copy = [...글제목]; copy.unshift(입력값); 글제목변경(copy)}}>발행</button>

      {
        modal == true? <Modal 글제목={글제목} title={title}></Modal> : null
      }
      

    </div>
  );
}

function Modal(props) {
  return(
    <>
      <div className='modal'>
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  );
}

export default App;
