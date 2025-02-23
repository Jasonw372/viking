import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import Tooltip from '../Tooltip';

/**
 * Slider 滑块组件
 * 允许用户在一个固定区间内选择一个数值。用户可以通过拖动滑块或点击滑动条来选择值。
 * 组件支持自定义最大值、最小值、步长，并可以通过 tooltip 实时显示当前值。
 */
export interface SliderProps extends Omit<React.HTMLAttributes<HTMLInputElement>, 'type'> {
  /** 最小值 */
  min?: number;
  /** 最大值 */
  max?: number;
  /** 步长，取值必须大于 0 */
  step?: number;
  /** 默认值 */
  defaultValue?: number;
  /** 是否始终显示 tooltip */
  tooltipVisible?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
}

/**
 * Slider 组件实现
 *
 * @param props - 组件属性
 */
const Slider: React.FC<SliderProps> = props => {
  const {
    min = 0,
    max = 100,
    step = 1,
    defaultValue = 0,
    tooltipVisible,
    onChange,
    className,
    style,
    disabled,
    ...restProps
  } = props;

  // 当前滑块值状态
  const [value, setValue] = useState(defaultValue);
  // 鼠标悬停状态
  const [isHovering, setIsHovering] = useState(false);

  /**
   * 处理滑块值变化
   * @param e - 输入事件对象
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    onChange?.(e);
  };

  // 滑块输入元素的引用
  const sliderRef = useRef<HTMLInputElement>(null);

  // 组件类名
  const classes = classNames('slider', className, {});

  // 控制 tooltip 显示逻辑
  const showTooltip = tooltipVisible || isHovering;
  // 滑块宽度（用于计算 tooltip 位置）
  const thumbWidth = 20;

  /**
   * 更新 tooltip 位置
   * 根据滑块当前值的百分比计算 tooltip 的水平位置
   */
  const updateTooltipPosition = () => {
    if (sliderRef.current) {
      const { width } = sliderRef.current.getBoundingClientRect();
      const percent = ((value - min) / (max - min)) * 100;
      const tooltipLeft = ((width - thumbWidth) * percent) / 100 - (width - thumbWidth) / 2;
      document.documentElement.style.setProperty('--slider-tooltip-left', `${tooltipLeft}px`);
    }
  };

  // 当值变化时更新 tooltip 位置
  React.useEffect(() => {
    updateTooltipPosition();
  }, [value]);

  /**
   * 处理鼠标移动事件
   * 实时更新 tooltip 位置，确保 tooltip 跟随滑块移动
   */
  const handleMouseMove = () => {
    updateTooltipPosition();
  };

  return (
    <div
      className={classes}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Tooltip
        visible={showTooltip}
        title={value}
        placement="top"
        style={{
          left: 'calc(var(--slider-tooltip-left))',
          top: '-10px',
        }}
      >
        <input
          ref={sliderRef}
          type="range"
          className="slider-input"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          onMouseMove={handleMouseMove}
          disabled={disabled}
          {...restProps}
          style={
            {
              ...style,
              // 设置css变量
              '--slider-thumb-size': `${thumbWidth}px`,
            } as React.CSSProperties
          }
        />
      </Tooltip>
    </div>
  );
};

export default Slider;
