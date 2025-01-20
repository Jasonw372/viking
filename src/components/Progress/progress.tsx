import type { FC } from 'react';
import React from 'react';
import type { ThemeProps } from '../Icon/icon';

export interface ProgressProps {
  percent: number; // 进度条百分比
  strokeHeight?: number; // 进度条高度
  showText?: boolean; // 是否显示进度条文字
  styles?: React.CSSProperties; // 自定义样式
  theme?: ThemeProps; // 主题
}

const Progress: FC<ProgressProps> = props => {
  const { percent, strokeHeight = 15, showText = true, styles, theme = 'primary' } = props;
  return (
    <div className="progress-bar" style={styles} data-testid="test-progress">
      <div
        className="progress-bar-outer"
        style={{
          height: `${strokeHeight}px`,
        }}
      >
        <div
          className={`progress-bar-inner color-${theme}`}
          style={{
            width: `${percent}%`,
          }}
        >
          {showText && <span className={'inner-text'}>{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  );
};

export default Progress;
