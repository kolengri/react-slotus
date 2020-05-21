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
  const slotAdded = !!context?.slots?.[name];

  React.useEffect(() => {
    if (context && !slotAdded) {
      context.mountSlot(name, children);

      return () => {
        context.unMountSlot(name);
      };
    }

    if (!context) {
      console.error(NO_CONTEXT_PROVIDER);
    }
  }, []);

  return null;
};

export const ReplaceSlot = React.memo(ReplaceSlotMemo);

export default ReplaceSlot;
