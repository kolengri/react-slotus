import React from 'react';

import { Layout, LayoutFactory } from './Layout';

const App = () => {
  return (
    <Layout>
      <LayoutFactory.ReplaceSlot name='Header'>
        Replace Header
      </LayoutFactory.ReplaceSlot>
      <LayoutFactory.ReplaceSlot name='Footer'>
        Replace Footer Куздфсу Ащщеук
      </LayoutFactory.ReplaceSlot>
    </Layout>
  );
};

export default App;
