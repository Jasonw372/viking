import type { Preview } from '@storybook/react';
import '../src/styles/index.scss';
import { useTheme } from '../src/hooks/useTheme';
import React from 'react';
import './style.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: '全局主题设置',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: '亮色模式' },
          { value: 'dark', icon: 'moon', title: '暗色模式' },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const { theme } = context.globals;
      const { setTheme } = useTheme();
      setTheme(theme);
      return <div className="storybook-preview">{Story()}</div>;
    },
  ],

  tags: ['autodocs', 'autodocs'],
};

export default preview;
