import React, { useState } from 'react';
import { AutoComplete } from 'viking-design';
import { DataSourceType } from 'viking-design/components/AutoComplete';

interface ProgrammingLanguageItem {
  value: string;
  icon: string;
}

const languages: ProgrammingLanguageItem[] = [
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

const CustomAutoComplete: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  // 获取建议项
  const fetchSuggestions = (keyword: string): ProgrammingLanguageItem[] => {
    return languages.filter(lang => lang.value.toLowerCase().startsWith(keyword.toLowerCase()));
  };

  // 渲染自定义选项
  const renderOption = (item: DataSourceType<ProgrammingLanguageItem>) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span role="img" aria-label="icon">{item.icon}</span>
        <span>{item.value}</span>
      </div>
    );
  };

  return (
    <div style={{ width: '300px', margin: '50px auto' }}>
      <AutoComplete
        placeholder="搜索编程语言..."
        fetchSuggestions={fetchSuggestions}
        renderOption={renderOption}
        onChange={e => setInputValue(e.target.value)}
        onSelect={item => console.log('选择:', item)}
      />
      <p>输入值: {inputValue}</p>
    </div>
  );
};

export default CustomAutoComplete;
