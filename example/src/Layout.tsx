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
      <LayoutFactory.ReserveSlot name='Header'>
        Header
        <br />
      </LayoutFactory.ReserveSlot>

      <LayoutFactory.ReserveSlot name='Content'>
        Content
      </LayoutFactory.ReserveSlot>
      <br />
      <LayoutFactory.ReserveSlot name='Footer'>
        Footer
      </LayoutFactory.ReserveSlot>
      {children}
    </LayoutFactory.Layout>
  );
};

export default Layout;
