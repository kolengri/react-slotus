import React from 'react';

import { Layout, LayoutFactory } from './Layout';

const App = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <Layout>
      <LayoutFactory.ReplaceSlot name='Header'>
        Replace Header
        <button onClick={() => setCounter(counter + 1)}>+1</button>
        <br />
      </LayoutFactory.ReplaceSlot>
      <LayoutFactory.ReplaceSlot name='Footer'>
        Replace Footer {counter}
      </LayoutFactory.ReplaceSlot>
      <br />
    </Layout>
  );
};

export default App;
