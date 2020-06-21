import { createElement } from 'react';
import {
  LayoutWrapper,
  ReserveSlot,
  ReplaceSlot,
  ReplaceSlotProps,
  ReserveSlotProps
} from './components';

export const createSlotLayout = <SlotNames extends string>() => ({
  Layout: LayoutWrapper,
  Replace: (props: ReplaceSlotProps<SlotNames>) =>
    createElement(ReplaceSlot, props),
  Reserve: (props: ReserveSlotProps<SlotNames>) =>
    createElement(ReserveSlot, props)
});
