import * as React from 'react';

import { LayoutContext } from '../context';

export type ReserveSlotProps<SlotNames extends string> = {
  name: SlotNames;
  children?: React.ReactNode;
};

const ReserveSlotMemo: React.FC<ReserveSlotProps<string>> = (props) => {
  const { name, children } = props;
  const context = React.useContext(LayoutContext);
  const content = context?.slots?.[name] || children;
  return (content as JSX.Element) || null;
};

export const ReserveSlot = React.memo(ReserveSlotMemo);

export default ReserveSlot;
