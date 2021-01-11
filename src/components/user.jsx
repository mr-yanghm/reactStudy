import React, { useEffect } from "react";
import { useContext } from "react/cjs/react.development";
import { UserDispatch } from "../appReducer";

const User = React.memo(({ user }) => {
  const dispatch = useContext(UserDispatch);
  /**
   * useEffect 에 전달하는 인자는 function, [deps] 인데, function 안에서 return 하는 cleanip function 은 deps 가 비어있을 경우 컴포넌트가 사라질때 호출
   */
  // useEffect(() => {
  //     console.log('컴포넌트가 화면에 나타남');
  //     return () => {
  //       console.log('컴포넌트가 화면에서 사라짐');
  //     };
  //   }, []);

  /**
   * deps에 특정 값을 넣을 경우
   * - 컴포넌트가 처음 마운트 될 때에도 호출,
   * - 지정한 값이 바뀔 때에도 호출,
   * - deps 안에 특정 값이 있다면 언마운트시에도 호출,
   * - 값이 바뀌기 직전에도 호출
   */
  // useEffect(() => {
  //     console.log('user 값이 설정됨');
  //     console.log(user);
  //     return () => {
  //         console.log('user 가 바뀌기 전..');
  //         console.log(user);
  //     };
  // }, [user]);

  /**
   * deps 를 생략할 경우 컴포넌트가 리랜더링 될 때 호출
   */
  // useEffect(() => {
  // console.log(user);
  // });

  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => dispatch({ type: "TOGGLE_USER", id: user.id })}
      >
        {user.username}
      </b>{" "}
      <span>({user.email})</span>
      {/* 아래처럼 function 안에 callback 으로 전달할 경우 화살표 함수를 이용하여 한번 감싸서 전달한다. */}
      {/* <button onClick={onRemove(user.id)}>삭제</button> */}
      <button onClick={() => dispatch({ type: "REMOVE_USER", id: user.id })}>
        삭제
      </button>
    </div>
  );
});

export default User;
