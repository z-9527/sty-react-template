import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Test from './components/Test';

interface IProps {}

function App(props: IProps) {
  return (
    <Suspense fallback={null}>
      hello world
      <Test />
    </Suspense>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
