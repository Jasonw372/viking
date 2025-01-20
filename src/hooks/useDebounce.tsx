import { useEffect, useState } from 'react';

// 自定义 Hook：useDebounce，用于防抖处理
export default function useDebounce(value: unknown, delay = 300) {
  // 定义状态：debouncedValue，初始值为传入的 value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // 设置一个定时器，在 delay 时间后更新 debouncedValue
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // 清除上一个定时器，防止多次触发
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // 依赖项：value 和 delay

  // 返回防抖后的值
  return debouncedValue;
}
