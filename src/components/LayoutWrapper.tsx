import * as React from 'react';

import { LayoutContext, MountSlot, Ref } from './context';
import { Replace } from './ReplaceSlot';

export type LayoutWrapperProps = {
  children: React.ReactNode;
};

const LayoutMemo: React.FC<LayoutWrapperProps> = (props) => {
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

  const content = React.Children.toArray(children).sort((itemA, itemB) => {
    if ((itemA as any)?.type === Replace) {
      return -1;
    }

    if ((itemB as any)?.type === Replace) {
      return 1;
    }

    return 0;
  });

  return (
    <LayoutContext.Provider
      value={{
        ref,
        mountSlot,
        mountReplace
      }}
    >
      {content}
    </LayoutContext.Provider>
  );
};

export const Layout = React.memo(LayoutMemo);

export default Layout;
