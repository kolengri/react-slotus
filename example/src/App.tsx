import React from 'react';

import { Layout, LayoutFactory } from './Layout';

const App = () => {
  const [counter, setCounter] = React.useState(0);
  const inc = () => setCounter(counter + 1);
  return (
    <Layout>
      <LayoutFactory.ReplaceSlot name='Header'>
        <>
          Replace Header
          <br />
        </>
      </LayoutFactory.ReplaceSlot>
      <LayoutFactory.ReplaceSlot name='Footer'>
        Replace Footer
        {counter}
      </LayoutFactory.ReplaceSlot>
      <button onClick={inc}>+1</button>
    </Layout>
  );
};

export default App;
