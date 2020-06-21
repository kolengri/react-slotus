import React from 'react';

import { Layout, LayoutFactory } from './Layout';

const App = () => {
  const [counter, setCounter] = React.useState(0);
  const inc = () => setCounter(counter + 1);
  return (
    <Layout>
      <LayoutFactory.Replace name='Header'>
        <>
          Replace Header
          <br />
        </>
      </LayoutFactory.Replace>
      <LayoutFactory.Replace name='Content'>
        <>
          Replace Content
          <br />
        </>
      </LayoutFactory.Replace>
      <LayoutFactory.Replace name='Footer'>
        Replace Footer
        {counter}
      </LayoutFactory.Replace>

      <button onClick={inc}>+1</button>
    </Layout>
  );
};

export default App;
