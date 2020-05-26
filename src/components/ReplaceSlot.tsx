import * as React from 'react';

import { LayoutContext } from '../context';
import { NO_CONTEXT_PROVIDER } from '../errors';

export type ReplaceSlotProps<SlotNames extends string> = {
  name: SlotNames;
  children: React.ReactNode;
};

const ReplaceSlotMemo: React.FC<ReplaceSlotProps<string>> = (props) => {
  const { name, children } = props;
  const context = React.useContext(LayoutContext);

  React.useEffect(() => {
    if (context) {
      context.mountSlot(name, children);
    }

    if (context) {
      return () => {
        context.unMountSlot(name);
      };
    }

    if (!context) {
      console.error(NO_CONTEXT_PROVIDER);
    }
  }, [children]);

  return null;
};

export const ReplaceSlot = React.memo(ReplaceSlotMemo);

export default ReplaceSlot;
