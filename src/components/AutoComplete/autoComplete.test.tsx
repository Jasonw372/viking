import { config } from 'react-transition-group';
import type { RenderResult } from '@testing-library/react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import AutoComplete from './index';
import type { AutoCompleteProps } from './autoComplete.tsx';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

// Disable the timeout by default
config.disabled = true;

const testArray = [
  { value: 'ab', number: 11 },
  { value: 'abc', number: 1 },
  { value: 'b', number: 4 },
  { value: 'c', number: 15 },
];

const testProps: AutoCompleteProps = {
  fetchSuggestions: query => {
    return testArray.filter(item => item.value.includes(query));
  },
  onSelect: vitest.fn(),
  placeholder: 'auto-complete',
};

let wrapper: RenderResult, inputNode: HTMLInputElement;
describe('test AutoComplete component', () => {
  beforeEach(() => {
    wrapper = render(<AutoComplete {...testProps} />);
    inputNode = wrapper.getByPlaceholderText('auto-complete') as HTMLInputElement;
  });

  it('test basic AutoComplete behavior', async () => {
    fireEvent.change(inputNode, { target: { value: 'a' } });
    await waitFor(() => {
      expect(wrapper.queryByText('ab')).toBeInTheDocument();
      expect(wrapper.queryByText('abc')).toBeInTheDocument();
    });

    expect(wrapper.container.querySelectorAll('.suggestion-item').length).toEqual(2);
    fireEvent.click(wrapper.getByText('ab'));
    expect(testProps.onSelect).toHaveBeenCalledWith({ value: 'ab', number: 11 });
    expect(wrapper.queryByText('ab')).not.toBeInTheDocument();
    expect(inputNode.value).toBe('ab');
  });

  it('should provide keyboard support', async () => {
    fireEvent.change(inputNode, { target: { value: 'a' } });
    await waitFor(() => {
      expect(wrapper.queryByText('ab')).toBeInTheDocument();
      expect(wrapper.queryByText('abc')).toBeInTheDocument();
    });

    const firstResult = wrapper.queryByText('ab');
    const secondResult = wrapper.queryByText('abc');

    // arrow down
    fireEvent.keyDown(inputNode, { keyCode: 40 });
    expect(firstResult).toHaveClass('is-active');
    //arrow down
    fireEvent.keyDown(inputNode, { keyCode: 40 });
    expect(secondResult).toHaveClass('is-active');
    //arrow up
    fireEvent.keyDown(inputNode, { keyCode: 38 });
    expect(firstResult).toHaveClass('is-active');
    // press enter
    fireEvent.keyDown(inputNode, { keyCode: 13 });
    expect(testProps.onSelect).toHaveBeenCalledWith({ value: 'ab', number: 11 });

    expect(wrapper.queryByText('ab')).not.toBeInTheDocument();
  });

  it('click outside should hide the dropdown', async () => {
    fireEvent.change(inputNode, { target: { value: 'a' } });
    await waitFor(() => {
      expect(wrapper.queryByText('ab')).toBeInTheDocument();
      expect(wrapper.queryByText('abc')).toBeInTheDocument();
    });

    fireEvent.click(document);
    expect(wrapper.queryByText('ab')).not.toBeInTheDocument();
  });

  it('renderOption should generate the right template', async () => {
    // clear the default renderOption
    wrapper.rerender(<AutoComplete {...testProps} renderOption={item => `li+${item.value}`} />);
    fireEvent.change(inputNode, { target: { value: 'a' } });
    await waitFor(() => {
      expect(wrapper.queryByText('li+ab')).toBeInTheDocument();
      expect(wrapper.queryByText('li+abc')).toBeInTheDocument();
    });
    expect(wrapper.queryByText('number: 11')).not.toBeInTheDocument();
  });

  it('async fetchSuggestions should works fine', async () => {
    const testPropsWithPromise: AutoCompleteProps = {
      ...testProps,
      fetchSuggestions: vitest.fn(query => {
        return Promise.resolve(testArray.filter(item => item.value.includes(query)));
      }),
      placeholder: 'auto-complete-async',
    };
    wrapper = render(<AutoComplete {...testPropsWithPromise} />);
    inputNode = wrapper.getByPlaceholderText('auto-complete-async') as HTMLInputElement;

    fireEvent.change(inputNode, { target: { value: 'a' } });
    await waitFor(() => {
      expect(wrapper.queryByText('ab')).toBeInTheDocument();
      expect(wrapper.queryByText('abc')).toBeInTheDocument();
    });
  });
});
