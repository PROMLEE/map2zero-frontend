import { useRecoilState } from 'recoil';
import { exampleState } from '../recoil';

export const Example = () => {
  const [example, setExample] = useRecoilState(exampleState);
  const onclick = () => {
    setExample({ text: example.text + '용', nums: example.nums + 1 });
  };
  return (
    <>
      <h1>안녕하세{example.text} 에코링크입니다.</h1>
      <h2>클릭횟수: {example.nums}</h2>
      <input type="button" value="클릭" onClick={onclick} />
      <hr />
      <div>.env 파일에 {process.env.REACT_APP_API_KEY} 표시</div>
      <div>root 디렉토리에 .env 파일을 만든 후 REACT_APP_API_KEY 변수 에 문자열을 할당해주세요.</div>
    </>
  );
};
