import * as React from 'react';
import { createSlotLayout } from 'react-slotus';

export const LayoutFactory = createSlotLayout<
  'Header' | 'Content' | 'Footer'
>();
export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  return (
    <LayoutFactory.Layout>
      {children}
      <LayoutFactory.Reserve name='Header'>
        Header
        <br />
      </LayoutFactory.Reserve>

      <LayoutFactory.Reserve name='Content'>Content</LayoutFactory.Reserve>
      <br />
      <LayoutFactory.Reserve name='Footer'>Footer</LayoutFactory.Reserve>
    </LayoutFactory.Layout>
  );
};

export default Layout;
