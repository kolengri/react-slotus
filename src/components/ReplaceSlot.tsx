import * as React from 'react';

import { LayoutContext } from './context';
import { PASS_CHILDREN_BEFORE_REPLACE } from '../errors';

export type ReplaceSlotProps<SlotNames extends string> = {
  name: SlotNames;
  children: React.ReactNode;
};

const ReplaceSlotMemo: React.FC<ReplaceSlotProps<string>> = (props) => {
  const { name, children } = props;
  const context = React.useContext(LayoutContext);

  if (context) {
    const { ref, mountSlot } = context;

    mountSlot(name, children);

    if (ref.current?.replaceMounted) {
      throw new Error(
        PASS_CHILDREN_BEFORE_REPLACE + `Error in ${name} slot component`
      );
    }
  }
  return null;
};

export const ReplaceSlot = React.memo(ReplaceSlotMemo);

export default ReplaceSlot;
