import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import type React from 'react';

// 主题色类型
export type ThemeProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps; // 主题色
}

const Icon: React.FC<IconProps> = props => {
  const { className, theme, ...restProps } = props;
  const classes = classNames('icon', className, {
    [`icon-${theme}`]: theme,
  });

  return <FontAwesomeIcon className={classes} {...restProps} data-testid="icon" />;
};

export default Icon;
