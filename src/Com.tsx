import React, { FC } from 'react';

interface PageProps {}

const arr = [312311, 1, 123, 123, 1, 12];
const Component: FC<PageProps> = (props) => {
  console.log(props);
  return <div>123123{arr.map((i) => i)}</div>;
};

export default Component;
