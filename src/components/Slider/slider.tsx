import classNames from 'classnames';
import React, { useState } from 'react';
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
    ...restProps
  } = props;

  const [value, setValue] = useState(defaultValue);
  const [isHovering, setIsHovering] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    onChange?.(e);
  };

  const classes = classNames('slider', className, {});

  const showTooltip = tooltipVisible || isHovering;

  return (
    <div
      className={classes}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Tooltip visible={showTooltip} title={value} placement="top">
        <input
          type="range"
          className="slider-input"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          {...restProps}
        />
      </Tooltip>
    </div>
  );
};

export default Slider;
