import Input from '../Input';
import type { InputProps } from '../Input/input';
import type { ChangeEvent } from 'react';
import React, { useState, useEffect, forwardRef } from 'react';
import Transition from '../Transition';

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

  return (
    <div className="auto-complete">
      <Input
        ref={ref}
        value={value !== undefined ? value : innerValue}
        onChange={handleChange}
        {...restProps}
      />
      <Transition
        in={showDropdown && suggestions.length > 0}
        animation="zoom-in-top"
        timeout={300}
        wrapper
      >
        <ul className="suggestion-list">
          {suggestions.map((item, index) => (
            <li key={index} onClick={() => handleSelect(item)}>
              {item}
            </li>
          ))}
        </ul>
      </Transition>
    </div>
  );
});

AutoComplete.displayName = 'AutoComplete';

export default AutoComplete;
