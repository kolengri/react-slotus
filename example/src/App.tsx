import React from 'react';

import { Layout, LayoutFactory } from './Layout';

const App = () => {
  const [counter, setCounter] = React.useState(0);
  const inc = () => setCounter(counter + 1);
  return (
    <Layout>
      <LayoutFactory.Replace name='Header'>
        Replace Header
      </LayoutFactory.Replace>
      <LayoutFactory.Replace name='Content'>
        Replace Content
      </LayoutFactory.Replace>
      <LayoutFactory.Replace name='Footer'>
        <div style={{ color: 'green' }}>
          Replace Footer
          {counter}
          <div style={{ color: 'red' }}>test</div>
          <div>test</div>
        </div>
      </LayoutFactory.Replace>
      <button onClick={inc}>+1</button>
    </Layout>
  );
};

export default App;
