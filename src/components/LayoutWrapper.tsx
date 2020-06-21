import * as React from 'react';

import { LayoutContext, MountSlot, Ref } from './context';

export type LayoutWrapperProps = {
  children: React.ReactNode;
};

const LayoutWrapperMemo: React.FC<LayoutWrapperProps> = (props) => {
  const { children } = props;
  const ref = React.useRef<Ref<string>>();
  ref.current = {
    replaceMounted: false,
    slots: {}
  };

  const mountSlot: MountSlot<string> = (name, slot) => {
    if (ref.current) {
      ref.current.slots[name] = slot;
    }
  };

  const mountReplace = () => {
    if (ref.current) {
      ref.current.replaceMounted = true;
    }
  };

  return (
    <LayoutContext.Provider
      value={{
        ref,
        mountSlot,
        mountReplace
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const LayoutWrapper = React.memo(LayoutWrapperMemo);

export default LayoutWrapper;
