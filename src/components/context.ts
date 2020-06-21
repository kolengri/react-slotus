import * as React from 'react';

export type LayoutSlots<SlotNames extends string> = {
  [key in SlotNames]: React.ReactNode;
};

export type MountSlot<SlotNames extends string> = (
  name: SlotNames,
  slot: React.ReactNode
) => void;

export type UnMountSlot<SlotNames extends string> = (name: SlotNames) => void;

export type Ref<SlotNames extends string> = {
  slots: LayoutSlots<SlotNames>;
  replaceMounted: boolean;
};

export type LayoutContext<SlotNames extends string> = {
  ref: React.MutableRefObject<Ref<SlotNames> | undefined>;
  mountSlot: MountSlot<SlotNames>;
  mountReplace: () => void;
} | null;

export const LayoutContext = React.createContext<LayoutContext<string>>(null);
