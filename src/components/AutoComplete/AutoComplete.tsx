import Input from '../Input';
import type { InputProps } from '../Input/input';
import type { ChangeEvent, KeyboardEvent } from 'react';
import { useState, useEffect, forwardRef, useRef } from 'react';
import Transition from '../Transition';
import classNames from 'classnames';
import useClickOutside from '../../hooks/useClickOutside';
import Icon from '../Icon';
import useDebounce from '../../hooks/useDebounce';

interface DataSourceObject {
  value: string;
}

export type DataSourceType<T = object> = T & DataSourceObject;

interface AutoCompleteProps extends Omit<InputProps, 'onSelect' | 'defaultValue'> {
  fetchSuggestions: (keyWord: string) => DataSourceType[] | Promise<DataSourceObject[]>;
  onSelect?: (item: DataSourceType) => void;
  defaultValue?: string;
  renderOption?: (item: DataSourceType) => React.ReactNode;
}

const AutoComplete = forwardRef<HTMLInputElement, AutoCompleteProps>((props, ref) => {
  const { fetchSuggestions, value, defaultValue, onSelect, onChange, renderOption, ...restProps } =
    props;
  const [innerValue, setInnerValue] = useState(defaultValue || '');
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [loading, setLoading] = useState(false);
  const triggerSearch = value !== undefined ? value : innerValue;
  const debounceValue = useDebounce(triggerSearch, 500);
  const wrapperRef = useRef<HTMLUListElement>(null);
  useClickOutside(wrapperRef, () => {
    setShowDropdown(false);
  });

  // 渲染模板
  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value;
  };

  // 处理受控模式下的 value 更新
  useEffect(() => {
    if (value !== undefined) {
      setInnerValue(value);
    }
  }, [value]);

  useEffect(() => {
    if (!debounceValue) {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }

    const results = fetchSuggestions(debounceValue);

    if (results instanceof Promise) {
      setLoading(true);
      results.then(data => {
        setLoading(false);
        setSuggestions(data);
        setShowDropdown(true);
      });
    } else {
      setSuggestions(results);
      setShowDropdown(true);
    }
  }, [debounceValue]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    // 非受控模式下更新内部值
    if (value === undefined) {
      setInnerValue(newValue);
    }

    // 调用外部 onChange
    if (onChange) {
      onChange(e);
    }
  };

  const handleSelect = (item: DataSourceType) => {
    // 非受控模式下更新内部值
    if (value === undefined) {
      setInnerValue(item.value);
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
      <div className="auto-complete-input">
        <Input
          ref={ref}
          value={value !== undefined ? value : innerValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          {...restProps}
        />
        {loading && (
          <div className="auto-complete-loading">
            <Icon icon="spinner" spin />
          </div>
        )}
      </div>
      <Transition
        in={showDropdown && suggestions.length > 0}
        animation="zoom-in-top"
        timeout={300}
        wrapper
      >
        <ul className="suggestion-list" ref={wrapperRef}>
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
                {renderTemplate(item)}
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
