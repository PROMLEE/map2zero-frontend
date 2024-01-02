// ----------------------액션 타입 작성----------------------

export const PLUS_COUNTER = 'example/PLUS_COUNTER';

// ----------------------액션 함수 작성----------------------

export const plusCounter = () => {
  var a = 3;
  return {
    type: PLUS_COUNTER,
  };
};

// ----------------------초기 상태 작성----------------------

const initialState = {
  count: '요',
};

// -----------------------리듀서 작성------------------------

function exampleReducer(state = initialState, action: { type: string }) {
  switch (action.type) {
    case PLUS_COUNTER:
      return {
        ...state,
        count: state.count + '용',
      };
    default:
      return state;
  }
}

export default exampleReducer;
