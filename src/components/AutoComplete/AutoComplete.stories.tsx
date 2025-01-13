import type { Meta, StoryObj } from '@storybook/react';
import AutoComplete from './index';
import { useState } from 'react';
import React from 'react';
import Button from '../Button';

const meta: Meta<typeof AutoComplete> = {
  title: 'Components/AutoComplete',
  component: AutoComplete,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AutoComplete>;

// 受控组件示例
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    const handleSelect = (item: string) => {
      console.log('selected:', item);
      setValue(item);
    };

    const fetchSuggestions = (keyword: string) => {
      const animals = ['dog', 'cat', 'dolphin', 'deer', 'dragon', 'elephant', 'eagle'];
      return animals.filter(item => item.toLowerCase().includes(keyword.toLowerCase()));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <p>Current value: {value}</p>
        <AutoComplete
          value={value}
          onChange={handleChange}
          placeholder="try typing 'd'"
          fetchSuggestions={fetchSuggestions}
          onSelect={handleSelect}
        />
      </div>
    );
  },
};

// 非受控组件示例
export const Uncontrolled: Story = {
  render: () => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const fetchSuggestions = (keyword: string) => {
      const animals = ['dog', 'cat', 'dolphin', 'deer', 'dragon', 'elephant', 'eagle'];
      return animals.filter(item => item.toLowerCase().includes(keyword.toLowerCase()));
    };

    const handleSelect = (item: string) => {
      console.log('selected:', item);
    };

    const handleClick = () => {
      // 通过 ref 获取当前值
      alert(`Current value from ref:${inputRef.current?.value}`);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <AutoComplete
          ref={inputRef}
          defaultValue="dog"
          placeholder=""
          fetchSuggestions={fetchSuggestions}
          onSelect={handleSelect}
        />
        <Button onClick={handleClick}>Get Current Value</Button>
      </div>
    );
  },
};

// Case insensitive search
export const CitySearch: Story = {
  render: () => {
    const cities = ['New York', 'London', 'Tokyo', 'Paris', 'Los Angeles', 'Beijing', 'Berlin'];
    const fetchSuggestions = (keyword: string) => {
      return cities.filter(city => city.toLowerCase().includes(keyword.toLowerCase()));
    };

    return <AutoComplete placeholder="Search cities..." fetchSuggestions={fetchSuggestions} />;
  },
};

// With prefix icon
export const WithIcon: Story = {
  render: () => {
    const fruits = ['apple', 'banana', 'orange', 'pear', 'grape', 'pineapple'];
    const fetchSuggestions = (keyword: string) => {
      return fruits.filter(fruit => fruit.toLowerCase().includes(keyword.toLowerCase()));
    };

    return (
      <AutoComplete
        placeholder="Search fruits..."
        fetchSuggestions={fetchSuggestions}
        prefixIcon="search"
      />
    );
  },
};

// Disabled state
export const Disabled: Story = {
  render: () => {
    const fetchSuggestions = (keyword: string) => {
      return ['dog', 'cat', 'fish'].filter(item => item.includes(keyword));
    };

    return (
      <AutoComplete disabled placeholder="This is disabled" fetchSuggestions={fetchSuggestions} />
    );
  },
};
