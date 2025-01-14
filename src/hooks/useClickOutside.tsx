import { useEffect, type RefObject } from 'react';

export default function useClickOutside(ref: RefObject<HTMLElement>, handler: CallableFunction) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      // 点击元素在组件内部，不触发
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      // 点击元素在组件外部，触发 handler
      handler();
    };
    document.addEventListener('click', listener);
    return () => {
      document.removeEventListener('click', listener);
    };
  }, [ref, handler]);
}
