import type { RenderResult } from '@testing-library/react';
import { render, fireEvent } from '@testing-library/react';
import type { TabProps } from './tab';
import Tab from './index';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const testProps: TabProps = {
  defaultIndex: 0,
  onSelect: vi.fn(),
};

const generateTab = (props: TabProps) => {
  return (
    <Tab {...props}>
      <Tab.Item label="tab1">content1</Tab.Item>
      <Tab.Item label="tab2">content2</Tab.Item>
      <Tab.Item label="tab3" disabled>
        content3
      </Tab.Item>
    </Tab>
  );
};

let wrapper: RenderResult;
let activeElement: HTMLElement;
let disabledElement: HTMLElement;

describe('test Tab component', () => {
  beforeEach(() => {
    wrapper = render(generateTab(testProps));
    activeElement = wrapper.getByText('tab1');
    disabledElement = wrapper.getByText('tab3');
  });

  it('should render correct Tab and TabItem based on default props', () => {
    expect(wrapper.container.querySelectorAll('.tabs-nav-item').length).toEqual(3);
    expect(activeElement).toHaveClass('is-active');
    expect(disabledElement).toHaveClass('is-disabled');
  });

  it('click items should change active and call the right callback', () => {
    const secondTab = wrapper.getByText('tab2');
    fireEvent.click(secondTab);
    expect(secondTab).toHaveClass('is-active');
    expect(activeElement).not.toHaveClass('is-active');
    expect(testProps.onSelect).toHaveBeenCalledWith(1);
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass('is-active');
    expect(testProps.onSelect).not.toHaveBeenCalledWith(2);
  });

  it('should render card type when type is set to card', () => {
    const cardProps: TabProps = {
      ...testProps,
      type: 'card',
    };
    const { container } = render(generateTab(cardProps));
    expect(container.querySelector('.tabs-nav')).toHaveClass('nav-card');
  });
});
