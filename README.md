# DEPRECATED
Please use (https://github.com/kolengri/react-slot-component)[React Slot Component]

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

The aim of this package is to end up with annoying practice of passing the subcomponents to the layouts using properties. The package allows you to create and use layouts with replaceable default slots with pure JSX/TSX syntax.

Use SlotFactory.Layout to create own layout.
Use SlotFactory.Reserve to mark a default replaceable slot in it.
Use SlotFactory.Replace to replace a default slot while using your layout.

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
      {/**
       * Pass children before Reserve components is important!
       */}
      {children}
      <SlotFactory.Reserve name='Header'>Header</SlotFactory.Reserve>
      <SlotFactory.Reserve name='Content'>Content</SlotFactory.Reserve>
      <SlotFactory.Reserve name='Footer'>Footer</SlotFactory.Reserve>
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
      <SlotFactory.Replace name='Header'>Replace Header</SlotFactory.Replace>
      <SlotFactory.Replace name='Content'>Replace Content</SlotFactory.Replace>
      <SlotFactory.Replace name='Footer'>Replace Footer</SlotFactory.Replace>
    </Layout>
  );
};
```

### Optionally allow Replace components with same name to override each other

This is especially useful for route transitions, where you briefly have both routes in DOM at the same time.
In example below, "Replace Header 2" will be rendered

```tsx
// App.tsx
import React from 'react';

import { Layout, SlotFactory } from './Layout';

export const App = () => {
  return (
    <Layout>
      <SlotFactory.Replace name='Header'>Replace Header 1</SlotFactory.Replace>
      <SlotFactory.Replace name='Header'>Replace Header 2</SlotFactory.Replace>
    </Layout>
  );
};
```

## License

MIT © [kolengri](https://github.com/kolengri)
