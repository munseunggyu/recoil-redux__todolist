import { motion } from "framer-motion";
import styled from "styled-components";
import {FaTrash} from 'react-icons/fa'
import {AiOutlineCheck} from 'react-icons/ai'
import { useRecoilState } from "recoil";
import { IToDos, toDoState } from "../atom";
const ListContainer = styled.div`
  margin-top:32px;
  margin-left:32px;
  margin-left:32px;
`;
const ListFlex = styled(motion.div)`
  display: flex;
  align-items:center;
  position:relative;
  margin-bottom:20px;
`;
const CircleBtn = styled(motion.button)<{iscompleted:boolean}>`
  outline:none;
  border-radius:50%;
  width:35px;
  height:35px;
  border:${props => props.iscompleted===true ? '1px solid RGB(56, 217, 169)' : '1px solid RGB(228, 231, 234)'};
  background-color:white;
  margin-right:25px;
`;
const ListText = styled.p<{iscompleted:boolean}>`
  font-size:23px;
  opacity: ${props => props.iscompleted===true ? 0.2 : 0.6};

`;
const Trash = styled(motion.div)`
  position: absolute;
  right:32px;
  color:rgba(0,0,0,0.3);
`;

function ToDoList(){
  const [todos,setTodos] = useRecoilState<IToDos[]>(toDoState)
  const del = (id:number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }
  const isDone = (id:number) => {
    setTodos(prev => {
      const copyPrev = prev.slice()
      const findIndex = copyPrev.findIndex(todo => todo.id === id)
      return [
        ...copyPrev.slice(0,findIndex),
        {
          id,
          text:copyPrev[findIndex].text,
          isCompleted:!copyPrev[findIndex].isCompleted
        },
        ...copyPrev.slice(findIndex+1)
      ]
    }
    )
  }
  return(
    <ListContainer>
      { todos.map(item => 
        <ListFlex key={item.id}
        onClick={() => isDone(item.id)}
        >
          <CircleBtn 
          iscompleted={item.isCompleted}
          >
           { item.isCompleted &&
             <AiOutlineCheck size='20' color='RGB(56, 217, 169)' />
           }
          </CircleBtn>
          <ListText iscompleted={item.isCompleted}>
            {item.text}
          </ListText>
          <Trash 
          onClick={() => del(item.id)}
          whileHover={{
            color:'red'
          }}
          >
            <FaTrash size='20' />
          </Trash>
      </ListFlex>)}
    </ListContainer>
  )
}

export default ToDoList;