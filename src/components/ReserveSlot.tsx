import * as React from 'react';

import { LayoutContext } from '../context';

type F = (replaceContent: React.ReactNode) => React.ReactNode;

export type ReserveSlotProps<SlotNames extends string> = {
  name: SlotNames;
  children?: React.ReactNode | F;
};

const ReserveSlotMemo: React.FC<ReserveSlotProps<string>> = (props) => {
  const { name, children } = props;
  const context = React.useContext(LayoutContext);
  const content: React.ReactNode | undefined = context?.slots?.[name];

  if (typeof children === 'function') {
    return (children as Function)(content) as JSX.Element;
  }
  return (content || children || null) as JSX.Element;
};

export const ReserveSlot = React.memo(ReserveSlotMemo);

export default ReserveSlot;
