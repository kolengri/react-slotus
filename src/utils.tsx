import * as React from 'react';

import {
  Layout,
  LayoutWrapperProps,
  Reserve,
  Replace,
  ReplaceSlotProps,
  ReserveSlotProps
} from './components';

type CreateResult<SlotNames extends string> = {
  Layout: React.FC<LayoutWrapperProps>;
  Replace: React.FC<ReplaceSlotProps<SlotNames>>;
  Reserve: React.FC<ReserveSlotProps<SlotNames>>;
};

export const createSlotLayout = <SlotNames extends string>(): CreateResult<
  SlotNames
> => ({
  Layout,
  Reserve,
  Replace
});
