import React, { ChangeEvent} from 'react';
import { useRecoilState } from 'recoil';
import { InputState } from '../../recoil';


const useInput = (props:string) => {
  
  const [inputs, setInputs] = useRecoilState(InputState);
  
  const onHandleChange : React.ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    if(props==="address"){
      setInputs({
        ...inputs,
        addresses: {
          ...inputs.addresses,
          [id]: value,
        },
      });
    }
    else {
      setInputs({
        ...inputs,
        [id]: value,
      });
    }
    
  };
  
return { inputs, setInputs,onHandleChange};

  }
  


export default useInput;