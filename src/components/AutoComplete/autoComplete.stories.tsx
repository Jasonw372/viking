import type { Meta, StoryObj } from '@storybook/react';
import AutoComplete from './index';
import { useState } from 'react';
import React from 'react';
import Button from '../Button';
import type { DataSourceType } from './autoComplete.tsx';

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
  name: '受控AutoComplete',
  render: () => {
    const [value, setValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    const handleSelect = (item: DataSourceType) => {
      console.log('selected:', item);
      setValue(item.value);
    };

    const fetchSuggestions = (keyword: string) => {
      console.log('fetching', keyword);

      const animals = ['dog', 'cat', 'dolphin', 'deer', 'dragon', 'elephant', 'eagle'];
      return animals
        .filter(item => item.toLowerCase().includes(keyword.toLowerCase()))
        .map(item => ({ value: item }));
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
  name: '非受控AutoComplete',
  render: () => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const fetchSuggestions = (keyword: string) => {
      console.log('fetching', keyword);

      const animals = ['dog', 'cat', 'dolphin', 'deer', 'dragon', 'elephant', 'eagle'];
      return animals
        .filter(item => item.toLowerCase().includes(keyword.toLowerCase()))
        .map(item => ({ value: item }));
    };

    const handleSelect = (item: DataSourceType) => {
      console.log('selected:', item);
    };

    const handleClick = () => {
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
  name: '忽略大小写的AutoComplete',
  render: () => {
    const cities = ['New York', 'London', 'Tokyo', 'Paris', 'Los Angeles', 'Beijing', 'Berlin'];
    const fetchSuggestions = (keyword: string) => {
      return cities
        .filter(city => city.toLowerCase().includes(keyword.toLowerCase()))
        .map(city => ({ value: city }));
    };

    return <AutoComplete placeholder="Search cities..." fetchSuggestions={fetchSuggestions} />;
  },
};

// With prefix icon
export const WithIcon: Story = {
  name: '带前缀的AutoComplete',
  render: () => {
    const fruits = ['apple', 'banana', 'orange', 'pear', 'grape', 'pineapple'];
    const fetchSuggestions = (keyword: string) => {
      return fruits
        .filter(fruit => fruit.toLowerCase().includes(keyword.toLowerCase()))
        .map(fruit => ({ value: fruit }));
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
  name: '不可用的AutoComplete',
  render: () => {
    const fetchSuggestions = (keyword: string) => {
      return ['dog', 'cat', 'fish']
        .filter(item => item.includes(keyword))
        .map(item => ({ value: item }));
    };

    return (
      <AutoComplete disabled placeholder="This is disabled" fetchSuggestions={fetchSuggestions} />
    );
  },
};

// 异步示例
export const AsyncSearch: Story = {
  name: '异步的AutoComplete',
  render: () => {
    const handleFetch = (query: string) => {
      return new Promise<DataSourceType[]>(resolve => {
        setTimeout(() => {
          const mockUsers = [
            { value: 'john_doe', avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4' },
            { value: 'john_smith', avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4' },
            { value: 'johnny123', avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4' },
            { value: 'john_cena', avatar_url: 'https://avatars.githubusercontent.com/u/4?v=4' },
            { value: 'john_wick', avatar_url: 'https://avatars.githubusercontent.com/u/5?v=4' },
          ];
          const results = mockUsers.filter(user =>
            user.value.toLowerCase().includes(query.toLowerCase()),
          );
          resolve(results);
        }, 1000);
      });
    };

    return (
      <div style={{ width: '300px' }}>
        <AutoComplete
          placeholder="输入 GitHub 用户名搜索..."
          fetchSuggestions={handleFetch}
          onSelect={item => {
            console.log('selected', item);
          }}
        />
        <p style={{ fontSize: '12px', color: '#666' }}>提示: 尝试输入 'john' 或其他用户名</p>
      </div>
    );
  },
};

// 带有自定义渲染的示例
export const CustomRender: Story = {
  name: '带有自定义渲染的AutoComplete',
  render: () => {
    interface ProgrammingLanguageItem {
      value: string;
      icon: string;
    }
    const languages = [
      { value: 'JavaScript', icon: '📘' },
      { value: 'TypeScript', icon: '📘' },
      { value: 'Python', icon: '🐍' },
      { value: 'Java', icon: '☕' },
      { value: 'C#', icon: '📘' },
      { value: 'Ruby', icon: '💎' },
      { value: 'Go', icon: '🔵' },
      { value: 'PHP', icon: '🐘' },
      { value: 'Swift', icon: '🍎' },
      { value: 'Kotlin', icon: '🤖' },
      { value: 'Rust', icon: '⚙️' },
      { value: 'Scala', icon: '🔴' },
      { value: 'Haskell', icon: '🎯' },
      { value: 'Dart', icon: '🎯' },
      { value: 'R', icon: '📊' },
      { value: 'MATLAB', icon: '🔢' },
      { value: 'Perl', icon: '🐪' },
      { value: 'Lua', icon: '🌙' },
      { value: 'Shell', icon: '🐚' },
      { value: 'SQL', icon: '💾' },
    ];

    const fetchSuggestions = (keyword: string) => {
      return languages.filter(lang => lang.value.toLowerCase().startsWith(keyword.toLowerCase()));
    };

    const renderOption = (item: DataSourceType) => {
      const itemWithIcon = item as DataSourceType<ProgrammingLanguageItem>;
      return (
        <div>
          <span role="img" aria-label="icon">
            {itemWithIcon.icon}
          </span>{' '}
          {itemWithIcon.value}
        </div>
      );
    };

    return (
      <AutoComplete
        placeholder="搜索编程语言..."
        fetchSuggestions={fetchSuggestions}
        renderOption={renderOption}
        onChange={e => {
          console.log(e.target.value);
        }}
        onSelect={item => {
          console.log(item);
        }}
      />
    );
  },
};
