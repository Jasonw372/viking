import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import Tooltip from '../Tooltip';

export interface SliderProps extends Omit<React.HTMLAttributes<HTMLInputElement>, 'type'> {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  tooltipVisible?: boolean;
}

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
    ...restProps
  } = props;

  const [value, setValue] = useState(defaultValue);
  const [isHovering, setIsHovering] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    onChange?.(e);
  };

  const sliderRef = useRef<HTMLInputElement>(null);

  const classes = classNames('slider', className, {});

  const showTooltip = tooltipVisible || isHovering;
  const thumbWidth = 20;
  const updateTooltipPosition = () => {
    if (sliderRef.current) {
      const { width } = sliderRef.current.getBoundingClientRect();
      const percent = ((value - min) / (max - min)) * 100;
      const tooltipLeft = ((width - thumbWidth) * percent) / 100 - (width - thumbWidth) / 2;
      document.documentElement.style.setProperty('--slider-tooltip-left', `${tooltipLeft}px`);
    }
  };

  React.useEffect(() => {
    updateTooltipPosition();
  }, [value]);

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
