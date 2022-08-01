import styled from "styled-components";
import CreateToDo from "./components/CreateToDo";
import ToDoHead from "./components/ToDoHead";
import ToDoList from "./components/ToDoList";

const ToDoContainer = styled.div`
  width:510px;
  height:800px;
  background-color:white;
  border-radius:20px;
  position:relative;
`;


function ToDoListContainer(){
  return(
    <ToDoContainer>
      <ToDoHead />
      <ToDoList />
      <CreateToDo />
    </ToDoContainer>
  )
}

export default ToDoListContainer;