import styled from "styled-components";
import ToDoHead from "./ToDoHead";

const ToDoContainer = styled.div`
  width:510px;
  height:800px;
  background-color:white;
  border-radius:20px;
`;


function ToDoList(){
  return(
    <ToDoContainer>
      <ToDoHead />
    </ToDoContainer>
  )
}

export default ToDoList;