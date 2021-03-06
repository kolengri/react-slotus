import * as React from 'react';

import { LayoutContext } from './context';
import { PASS_CHILDREN_BEFORE_REPLACE } from '../errors';

export type ReplaceSlotProps<SlotNames extends string = string> = {
  name: SlotNames;
  children: React.ReactNode;
};

const ReplaceMemo: React.FC<ReplaceSlotProps> = (props) => {
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

export const Replace = React.memo(ReplaceMemo);

export default Replace;
