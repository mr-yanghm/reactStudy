import React, { useCallback, useMemo, useRef, useReducer } from "react";
import "./app.css";
import Counter from "./components/counter";
import CounterReducer from "./components/counterReducer";
import CreateUser from "./components/createUser";
import Hello from "./components/hello";
import Title from "./components/title";
import InputSample from "./components/inputSample";
import InputsSample from "./components/inputsSample";
import UserList from "./components/userList";
import Wrapper from "./components/wrapper";
import useInputs from "./Hooks/useInputs";

/**
 * active 된 user의 수를 반환
 * @param {*} users
 * @returns int
 */
function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중...");
  return users.filter((user) => user.active).length;
}

const initialState = {
  inputs: {
    username: "",
    email: "",
  },
  users: [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case "CREATE_USER":
      return {
        // inputs: initialState.inputs,
        // ...state, // 위와 같은 표현
        users: state.users.concat(action.user),
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    default:
      return state;
  }
}

export const UserDispatch = React.createContext(null);

function AppReducer() {
  const [{ username, email }, onChange, reset] = useInputs({
    username: "",
    email: "",
  });
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);

  const { users } = state;

  //useMemo Hook 사용하여 성능 개선
  // deps 로 전달한 객체가 변경되었을 경우 첫번째 function 호출
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <ol>
      <li>
        <Title title={"props.children 설명"} />
        <Wrapper>
          <Hello name="react" color="red" isSpecial={true} />
          <Hello color="orange" />
        </Wrapper>
      </li>
      <li>
        <Title title={"counter 예제"} />
        <Counter />
      </li>
      <li>
        <Title title={"input 초기화"} />
        <InputSample />
      </li>
      <li>
        <Title title={"input 여러개 핸들링"} />
        <InputsSample />
      </li>
      <li>
        <Title title={"counter reducer 예제"} />
        <CounterReducer />
      </li>
      <li>
        <Title
          title={
            "state를 부모에서 만들어 props로 전달하면서 state 핸들링 <배열에 항목 추가 & Reducer 적용>"
          }
        />
        <UserDispatch.Provider value={dispatch}>
          <CreateUser />
          <UserList users={users} />
          <div>활성사용자 수 : {count}</div>
        </UserDispatch.Provider>
      </li>
    </ol>
  );
}

export default AppReducer;
