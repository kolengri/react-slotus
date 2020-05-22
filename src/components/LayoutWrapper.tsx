import * as React from 'react';

import { LayoutContext, LayoutSlots, MountSlot, UnMountSlot } from '../context';
import { DUPLICATE_SLOT_NAME } from '../errors';

export type LayoutWrapperProps = {
  children: React.ReactNode;
};

const LayoutWrapperMemo: React.FC<LayoutWrapperProps> = (props) => {
  const { children } = props;
  const [slots, setSlots] = React.useState<LayoutSlots<string>>({});

  const mountSlot: MountSlot<string> = (name, slot) => {
    setSlots((p) => {
      if (p[name]) {
        console.warn(DUPLICATE_SLOT_NAME, name);
        return p;
      }
      return {
        ...p,
        [name]: slot
      };
    });
  };

  const unMountSlot: UnMountSlot<string> = (name) => {
    setSlots((p) => ({
      ...p,
      [name]: undefined
    }));
  };

  return (
    <LayoutContext.Provider
      value={{
        slots,
        mountSlot,
        unMountSlot
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const LayoutWrapper = React.memo(LayoutWrapperMemo);

export default LayoutWrapper;
