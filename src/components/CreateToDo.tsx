import { motion } from "framer-motion";
import styled from "styled-components";
import {AiOutlinePlus} from 'react-icons/ai'

const InputContainer = styled.div`
background: #f8f9fa;
  width:100%;
  padding-top: 32px;
  padding-bottom: 72px;
  position:absolute;
  bottom:0;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
  
`;
const Input = styled.input`
  width:440px;
  height:40px;
  outline:none;
  margin-left:32px;
  border:1px solid RGB(239, 240, 242);
  border-radius:5px;
  font-size:20px;
  padding:12px;
`;
const ToggleBtn = styled(motion.button)`
  background-color:RGB(56, 217, 169);
  border:0;
  outline:none;
  position:absolute;
  bottom:-38px;
  left:220px;
  border-radius:50%;
  width:75px;
  height:75px;
`

function CreateToDo(){
  return(
    <>
    <InputContainer>
      <Input placeholder="할 일을 입력후, Enter 를 누르세요." />
    </InputContainer>
    <ToggleBtn >
      <AiOutlinePlus size='50' color='white' />
    </ToggleBtn>
    </>
  )
}

export default CreateToDo;