import React from 'react';
import classNames from 'classnames';

const sizes = ['large', 'default', 'small', 'xl', '2xl'];

export interface AvatarProps {
  size?: 'large' | 'default' | 'small' | 'xl' | '2xl' | number; // 头像尺寸
  shape?: 'circle' | 'square'; // 形状：圆形或方形
  src?: string; // 图片源地址
  alt?: string; // 替代文本
  children?: React.ReactNode; // 头像中显示的文字
  className?: string; // 自定义类名
  onError?: () => void; // 图片加载失败时的回调
}

const Avatar: React.FC<AvatarProps> = props => {
  const { size = 'default', shape = 'circle', src, alt, children, className, onError } = props;
  const classes = classNames('avatar', className, {
    [`avatar-${size}`]: typeof size === 'string' && sizes.includes(size),
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
