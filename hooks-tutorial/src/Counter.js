import React, { useReducer } from "react";

function reducer(state, action) {
  // action.type에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      // 아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  // useReducer의 첫 번째 파라미터에는 리듀서 함수
  // 두번째 파라미터에는 해당 리듀서의 기본값
  // 이 훅을 사용하면 state값과 dispatch 함수를 받아온다
  // state : 현재 가리키고 있는 상태
  // dispatch : 액션을 발생시키는 함수
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b> 입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
  // dispatch(action)과 같은 형태, 함수안에 파라미터로 액션 값을 넣어 주면 리듀서 함수가 호출되는 구조
  // useReducer를 사용했을 때의 가장 큰 장점은 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다는 것
};

export default Counter;
