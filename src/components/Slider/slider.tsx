import ReactSlider from 'react-slider';
import React, { useRef, useState } from 'react';

interface SliderProps {
  min?: number;
  max?: number;
  defaultValue?: number;
  vertical?: boolean;
  value?: number;
  step?: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  showTooltip?: boolean;
  sliderHeight?: number;
}

const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  defaultValue = 0,
  vertical = false,
  value,
  step = 1,
  sliderHeight = '120',
  onChange,
  disabled = false,
  className = '',
  showTooltip = true,
}) => {
  const isControlled = value !== undefined;
  const [dragging, setDragging] = useState(false);
  const [hover, setHover] = useState(false);
  const sliderRef = useRef(null);

  // 垂直模式下，slider的高度为sliderHeight
  // 水平模式下，slider的高度为sliderHeight的1/2
  const sliderHeightStyle = vertical ? `${sliderHeight}px` : '100%';

  return (
    <div
      style={{
        height: sliderHeightStyle,
      }}
    >
      <ReactSlider
        ref={sliderRef}
        className={`viking-slider ${className} ${vertical ? 'vertical' : ''}`}
        thumbClassName="viking-slider-thumb"
        trackClassName="viking-slider-track"
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        orientation={vertical ? 'vertical' : 'horizontal'}
        value={isControlled ? value : undefined}
        defaultValue={isControlled ? undefined : defaultValue}
        onChange={(val: number | readonly number[]) =>
          onChange?.(Array.isArray(val) ? val[0] : val)
        }
        renderThumb={(props: any, state: { valueNow: number }) => {
          const showTooltipNow = showTooltip && (hover || dragging);
          return (
            <div
              {...props}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onMouseDown={() => setDragging(true)}
              onMouseUp={() => setDragging(false)}
            >
              {showTooltipNow && <div className="viking-slider-tooltip">{state.valueNow}</div>}
              <div className="viking-slider-thumb-inner">
                <div className="viking-slider-thumb-inner-dot"></div>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};

export default Slider;
