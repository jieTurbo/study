import React, { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import Com from './Com';

const appFn = '123';

const App = () => {
  const data = useMemo(() => 123, []);
  useEffect(() => {
    console.log(data);
  }, []);
  const appFn = () => {};
  return (
    <div>
      <h1 onClick={appFn}>Hello!!</h1>
      <h2>Welcome to your First React App..!</h2>
      <Com />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
