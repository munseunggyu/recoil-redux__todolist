import { motion } from "framer-motion";
import styled from "styled-components";
import {FaTrash} from 'react-icons/fa'
import { useState } from "react";
const ListContainer = styled.div`
  margin-top:32px;
  margin-left:32px;
  margin-left:32px;
`;
const ListFlex = styled.div`
  display: flex;
  align-items:center;
  position:relative;
`
const CircleBtn = styled(motion.button)`
  outline:none;
  border-radius:50%;
  width:35px;
  height:35px;
  border:1px solid RGB(56, 217, 169);
  background-color:white;
  margin-right:25px;
`;
const ListText = styled.p`
  font-size:23px;
  opacity:0.6;
`;
const Trash = styled.div`
  position: absolute;
  right:32px;
  color:rgba(0,0,0,0.3);
`

function ToDoList(){
  return(
    <ListContainer>
      <ListFlex>
        <CircleBtn />
        <ListText>
          아침 산책
        </ListText>
        <Trash>
          <FaTrash size='20' />
        </Trash>
      </ListFlex>
    </ListContainer>
  )
}

export default ToDoList;