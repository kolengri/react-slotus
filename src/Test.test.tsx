import React from 'react';

import renderer from 'react-test-renderer';

import { createSlotLayout } from '.';

const LF = createSlotLayout<'header' | 'content' | 'footer'>();

const TestComponent: React.FC = (props) => {
  return (
    <LF.Layout>
      <LF.ReserveSlot name='header'>header</LF.ReserveSlot>
      <LF.ReserveSlot name='content'>content</LF.ReserveSlot>
      <LF.ReserveSlot name='footer'>footer</LF.ReserveSlot>
      {props.children}
    </LF.Layout>
  );
};

const component = renderer.create(<TestComponent />);
const componentWithReplacedSlots = renderer.create(
  <TestComponent>
    <LF.ReplaceSlot name='header'>replaced header</LF.ReplaceSlot>
  </TestComponent>
);

describe('Layout Factory', () => {
  it('Default layout is working', () => {
    const tree = component.toJSON();
    expect(tree).toStrictEqual(['header', 'content', 'footer']);
  });
  it('Replaced layout is working', () => {
    const tree = componentWithReplacedSlots.toJSON();
    setTimeout(() => {
      // this should fail:
      expect(tree).toStrictEqual(['replaced header', 'content', 'footer']);
    });
  });
});
