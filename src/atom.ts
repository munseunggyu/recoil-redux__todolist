import { atom } from "recoil";

export interface IToDos {
  id:number;
  text:string;
  isCompleted: boolean;
};
export const inputState = atom<string>({
  key:'inputState',
  default:'',
});

export const  toDoState = atom<IToDos[]>({
  key:'todos',
  default:[
    {
      id:1,
      text:'스트레칭',
      isCompleted:false,
    }
  ]
});

