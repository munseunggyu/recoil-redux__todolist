import styled from "styled-components";
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
  return(
    <HeadContainer>
      <Date >
        {`${year}년 ${month}월 ${date}일`}
      </Date>
      <Day>
        {day}
      </Day>
      <TasksLeft>
        할일 남음
      </TasksLeft>
    </HeadContainer>
  )
}

export default ToDoHead;