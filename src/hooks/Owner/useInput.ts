import React, { ChangeEvent} from 'react';
import { useRecoilState } from 'recoil';
import { InputState } from '../../recoil';


const useInput = (type:string) => {
  
  const [inputs, setInputs] = useRecoilState(InputState);
  
  const onHandleChange : React.ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
  

    setInputs({
      ...inputs,
      ...(type === "address" ? { addresses: { ...inputs.addresses, [id]: value } } : { [id]: value })
    });
    
  };
  
return { inputs, setInputs,onHandleChange};

  }
  


export default useInput;