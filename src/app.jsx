import React, { useCallback, useMemo, useRef, useState } from "react";
import "./app.css";
import Counter from "./components/counter";
import CreateUser from './components/createUser';
import Hello from "./components/hello";
import Title from "./components/title";
import InputSample from "./components/inputSample";
import InputsSample from "./components/inputsSample";
import UserList from './components/userList';
import Wrapper from "./components/wrapper";

/**
 * active 된 user의 수를 반환
 * @param {*} users 
 * @returns int
 */
function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  // App component 가 리랜더링 될때마다 재생성 됨
  // const onChange = (event) => {
  //   const { name, value } = event.target;
  //   setInputs({
  //     ...inputs,
  //     [name]: value,
  //   });
  // };

  /**
   * useCallback 으로 변경하여 deps 로 전달된 인자의 값이 변경되었을 경우에만 호출
   */
  const onChange = useCallback((event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  }, []);

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }]);

  const nextId = useRef(4);

  /**
   * useCallback 으로 변경
   */
  const onCreate = useCallback(() => {
    console.log('onCreate called~!');

    const user = {
      id: nextId.current,
      username,
      email
    };
    // setUsers([...users, user]);
    setUsers((users) => users.concat(user));

    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  }, [username, email]);

  /**
   * useCallback 으로 변경
   * @param {*} id 
   */
  const onRemove = useCallback((id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  }, []);

  /**
   * useCallback 의 2번째 인자(deps)에 users 를 전달하여 users가 변경될 경우에만 호출
   */
  // const onToggle = useCallback((id) => {
  //   setUsers(users.map((user) => user.id === id ? { ...user, active: !user.active } : user))
  // }, [users]);

  /**
   * setUsers 안에서 함수형으로 users를 전달받아 자체적으로 처리, useCallback 호출 시 2번째 인자 필요없음.
   */
  const onToggle = useCallback((id) => {
    setUsers((users) => users.map((user) => user.id === id ? { ...user, active: !user.active } : user))
  }, []);

  // 아래 코드는 CreateUser component 로 전달 된 input tag의 값이 변해도 호출
  // const count = countActiveUsers(users);

  //useMemo Hook 사용하여 성능 개선
  // deps 로 전달한 객체가 변경되었을 경우 첫번째 function 호출
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <ol>
      <li>
        <Title title={'props.children 설명'} />
        <Wrapper>
          <Hello name="react" color="red" isSpecial={true} />
          <Hello color="orange" />
        </Wrapper>
      </li>
      <li>
        <Title title={'counter 예제'} />
        <Counter />
      </li>
      <li>
        <Title title={'input 초기화'} />
        <InputSample />
      </li>
      <li>
        <Title title={'input 여러개 핸들링'} />
        <InputsSample />
      </li>
      <li>
        <Title title={'state를 부모에서 만들어 props로 전달하면서 state 핸들링 <배열에 항목 추가>'} />
        <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
        <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
        <div>활성사용자 수 : {count}</div>
      </li>
    </ol>
  );
}

export default App;