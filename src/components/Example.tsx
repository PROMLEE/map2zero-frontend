import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { plusCounter } from "../modules/example";

export default function Example() {
  const data = useSelector((state: RootState) => state.example.count);
  const dispatch = useDispatch();
  const plusnum = () => {
    dispatch(plusCounter());
  };

  return (
    <>
      <h1>안녕하세{data} 에코링크입니다.</h1>
      <input type="button" value="클릭" onClick={plusnum} />
      <hr />
      <div>{process.env.REACT_APP_API_KEY} 표시</div>
    </>
  );
}
