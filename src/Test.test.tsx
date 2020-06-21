import React from 'react';

import renderer from 'react-test-renderer';

import { createSlotLayout } from '.';

const LF = createSlotLayout<'header' | 'content' | 'footer'>();

const TestComponent: React.FC = (props) => {
  return (
    <LF.Layout>
      <LF.Reserve name='header'>header</LF.Reserve>
      <LF.Reserve name='content'>content</LF.Reserve>
      <LF.Reserve name='footer'>footer</LF.Reserve>
      {props.children}
    </LF.Layout>
  );
};

const component = renderer.create(<TestComponent />);
const componentWithReplacedSlots = renderer.create(
  <TestComponent>
    <LF.Replace name='header'>replaced header</LF.Replace>
  </TestComponent>
);

describe('Layout Factory', () => {
  it('Default layout is working', () => {
    const tree = component.toJSON();
    expect(tree).toStrictEqual(['header', 'content', 'footer']);
  });
  it('Replaced layout is working', () => {
    const tree = componentWithReplacedSlots.toJSON();
    // this should fail:
    expect(tree).toStrictEqual(['replaced header', 'content', 'footer']);
  });
});
