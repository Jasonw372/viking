import Input from '../Input';
import type { InputProps } from '../Input/input';
import type { ChangeEvent, KeyboardEvent } from 'react';
import React, { useState, useEffect, forwardRef } from 'react';
import Transition from '../Transition';
import classNames from 'classnames';
interface AutoCompleteProps extends Omit<InputProps, 'onSelect' | 'defaultValue'> {
  fetchSuggestions: (keyWord: string) => string[];
  onSelect?: (item: string) => void;
  defaultValue?: string;
}

const AutoComplete = forwardRef<HTMLInputElement, AutoCompleteProps>((props, ref) => {
  const { fetchSuggestions, value, defaultValue, onSelect, onChange, ...restProps } = props;
  const [innerValue, setInnerValue] = useState(defaultValue || '');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);

  // 处理受控模式下的 value 更新
  useEffect(() => {
    if (value !== undefined) {
      setInnerValue(value);
    }
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    // 非受控模式下更新内部值
    if (value === undefined) {
      setInnerValue(newValue);
    }

    if (newValue) {
      const results = fetchSuggestions(newValue);
      setSuggestions(results);
      setShowDropdown(true);
    } else {
      setSuggestions([]);
      setShowDropdown(false);
    }

    // 调用外部 onChange
    if (onChange) {
      onChange(e);
    }
  };

  const handleSelect = (item: string) => {
    // 非受控模式下更新内部值
    if (value === undefined) {
      setInnerValue(item);
    }
    setShowDropdown(false);
    if (onSelect) {
      onSelect(item);
    }
  };

  const highlight = (index: number) => {
    if (index < 0) index = 0;
    if (index >= suggestions.length) {
      index = suggestions.length - 1;
    }
    setHighlightIndex(index);
  };

  const handleMouseMove = (index: number) => {
    setHighlightIndex(index);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'Enter':
        if (suggestions[highlightIndex]) {
          handleSelect(suggestions[highlightIndex]);
        }
        break;
      case 'ArrowUp':
        highlight(highlightIndex - 1);
        break;
      case 'ArrowDown':
        highlight(highlightIndex + 1);
        break;
      case 'Escape':
        setShowDropdown(false);
        break;
      default:
        break;
    }
  };
  return (
    <div className="auto-complete">
      <Input
        ref={ref}
        value={value !== undefined ? value : innerValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...restProps}
      />
      <Transition
        in={showDropdown && suggestions.length > 0}
        animation="zoom-in-top"
        timeout={300}
        wrapper
      >
        <ul className="suggestion-list">
          {suggestions.map((item, index) => {
            const classes = classNames('suggestion-item', {
              'is-active': index === highlightIndex,
            });
            return (
              <li
                key={index}
                className={classes}
                onClick={() => handleSelect(item)}
                onMouseMove={() => handleMouseMove(index)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </Transition>
    </div>
  );
});

AutoComplete.displayName = 'AutoComplete';

export default AutoComplete;
