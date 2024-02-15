import React, { ChangeEvent, useState} from 'react';
import { InputState, InputStateType } from '../../recoil/Owner/ownerTypes';
import { atom, useRecoilState } from 'recoil';



const useInput = (type:string) => {

  const [inputs, setInputs] = useRecoilState(InputState);

  const onHandleChange : React.ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInputs({
      ...inputs,
      ...(type === "address" ? { address: { ...inputs.address, [id]: value } } : { [id]: value })
    });
    
  };
  
return { inputs, setInputs,onHandleChange};

  }
  


export default useInput;