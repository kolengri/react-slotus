import { createElement } from 'react'
import {
  LayoutWrapper,
  ReserveSlot,
  ReplaceSlot,
  ReplaceSlotProps,
  ReserveSlotProps
} from './components'

export const createSlotLayout = <SlotNames extends string>() => ({
  Layout: LayoutWrapper,
  ReplaceSlot: (props: ReplaceSlotProps<SlotNames>) =>
    createElement(ReplaceSlot, props),
  ReserveSlot: (props: ReserveSlotProps<SlotNames>) =>
    createElement(ReserveSlot, props)
})
