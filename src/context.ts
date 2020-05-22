import * as React from 'react';

export type LayoutSlots<SlotNames extends string> = {
  [key in SlotNames]: React.ReactNode;
};

export type MountSlot<SlotNames extends string> = (
  name: SlotNames,
  slot: React.ReactNode
) => void;

export type UnMountSlot<SlotNames extends string> = (name: SlotNames) => void;

export type LayoutContext<SlotNames extends string> = {
  slots: LayoutSlots<SlotNames> | null;
  mountSlot: MountSlot<SlotNames>;
  unMountSlot: UnMountSlot<SlotNames>;
} | null;

export const LayoutContext = React.createContext<LayoutContext<string>>(null);
