import { AutoComplete } from 'viking-design';
import React, { useState } from 'react';


const options = ['Apple', 'Banana', 'Orange'];

const DefaultAutoComplete = () => {
  const [value, setValue] = useState('');
  const handleSearch = (query: string) => {
    return options
      .filter(option => option.toLowerCase().includes(query.toLowerCase()))
      .map(option => ({ value: option }));
  };

  return (
    <div style={{width: '300px', margin: '50px auto'}}>
      <AutoComplete
        placeholder="请输入..."
        fetchSuggestions={handleSearch}
        value={value}
        onChange={e => setValue(e.target.value)}
        onSelect={item => {
          setValue(item.value);
        }}
      />
    </div>
  );
};

export default DefaultAutoComplete;