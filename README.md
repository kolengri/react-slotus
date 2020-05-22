# Vue like slot layout

## react-slotus

[![NPM](https://img.shields.io/npm/v/react-slotus.svg)](https://www.npmjs.com/package/react-slotus)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Badges](https://badgen.net/npm/license/react-slotus)](https://www.npmjs.com/package/react-slotus)
[![Badges](https://badgen.net/npm/dependents/react-slotus)](https://www.npmjs.com/package/react-slotus)
[![Badges](https://badgen.net/npm/types/react-slotus)](https://www.npmjs.com/package/react-slotus)
[![Badges](https://badgen.net/github/issues/kolengri/react-slotus)](https://www.npmjs.com/package/react-slotus)
[![Badges](https://badgen.net/bundlephobia/min/react-slotus)](https://bundlephobia.com/result?p=react-slotus)
[![Badges](https://badgen.net/bundlephobia/minzip/react-slotus)](https://bundlephobia.com/result?p=react-slotus)

## Install

```bash
npm install --save react-slotus
```

```bash
yarn add  react-slotus
```

## Usage

### Prepare your Layout

```tsx
// Layout.tsx

import * as React from 'react';
import { createSlotLayout } from 'react-slotus';

// Describe you future slots name in generic createSlotLayout function
export const SlotFactory = createSlotLayout<'Header' | 'Content' | 'Footer'>();

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  return (
    <SlotFactory.Layout>
      <SlotFactory.ReserveSlot name='Header'>Header</SlotFactory.ReserveSlot>
      <SlotFactory.ReserveSlot name='Content'>Content</SlotFactory.ReserveSlot>
      <SlotFactory.ReserveSlot name='Footer'>Footer</SlotFactory.ReserveSlot>
      {/** Pass children is important! */}
      {children}
    </SlotFactory.Layout>
  );
};
```

### Use in app with replaced layout parts!

```tsx
// App.tsx
import React from 'react';

import { Layout, SlotFactory } from './Layout';

export const App = () => {
  return (
    <Layout>
      <SlotFactory.ReplaceSlot name='Header'>
        Replace Header
      </SlotFactory.ReplaceSlot>
      <SlotFactory.ReplaceSlot name='Content'>
        Replace Content
      </SlotFactory.ReplaceSlot>
      <SlotFactory.ReplaceSlot name='Footer'>
        Replace Footer
      </SlotFactory.ReplaceSlot>
    </Layout>
  );
};
```

## License

MIT © [kolengri](https://github.com/kolengri)
