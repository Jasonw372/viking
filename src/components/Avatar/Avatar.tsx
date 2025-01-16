import React from 'react';
import classNames from 'classnames';

export interface AvatarProps {
  /** 头像尺寸 */
  size?: 'large' | 'default' | 'small' | number;
  /** 形状：圆形或方形 */
  shape?: 'circle' | 'square';
  /** 图片源地址 */
  src?: string;
  /** 替代文本 */
  alt?: string;
  /** 头像中显示的文字 */
  children?: React.ReactNode;
  /** 自定义类名 */
  className?: string;
  /** 图片加载失败时的回调 */
  onError?: () => void;
}

const Avatar: React.FC<AvatarProps> = props => {
  const { size = 'default', shape = 'circle', src, alt, children, className, onError } = props;

  const classes = classNames('avatar', className, {
    [`avatar-${size}`]: typeof size === 'string',
    [`avatar-${shape}`]: shape,
  });

  const [isImgExist, setIsImgExist] = React.useState(true);

  const handleError = () => {
    setIsImgExist(false);
    onError?.();
  };

  return (
    <span
      className={classes}
      style={{
        width: typeof size === 'number' ? `${size}px` : undefined,
        height: typeof size === 'number' ? `${size}px` : undefined,
      }}
    >
      {src && isImgExist ? <img src={src} alt={alt} onError={handleError} /> : children}
    </span>
  );
};

export default Avatar;
