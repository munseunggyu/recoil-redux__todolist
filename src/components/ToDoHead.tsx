import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { toDoState } from "../atom";
import {  NowDate } from "./Date";

const HeadContainer = styled.div`
  padding-left:32px;
  padding-top:50px;
  border-bottom: 1px solid #e9ecef;
`;
const Date = styled.h1`
  font-size:40px;
  font-weight:700;
  margin-bottom:20px;
`;
const Day = styled.h3`
  font-size:25px;
  color:rgba(0,0,0,0.4);
  margin-bottom:50px;
`;
const TasksLeft = styled.div`
  color: #20c997;
  font-size: 18px;
  margin-top: 40px;
  font-weight: bold;
  padding-bottom:30px;
`;


function ToDoHead(){
  const {year,month,date,day} = NowDate()
  const toDos = useRecoilValue(toDoState);
  let count = 0 ;
    toDos.forEach(v => {
      if(toDos.length === 0) return;
      if(v.isCompleted === false){
        count++
      }
    })
  
  return(
    <HeadContainer>
      <Date >
        {`${year}년 ${month}월 ${date}일`}
      </Date>
      <Day>
        {day}
      </Day>
      <TasksLeft>
        할일 {count}남음
      </TasksLeft>
    </HeadContainer>
  )
}

export default ToDoHead;