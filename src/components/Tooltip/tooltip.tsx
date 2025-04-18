import React, { useState, useRef, useImperativeHandle, forwardRef } from 'react';
import Trigger from 'rc-trigger';
import classNames from 'classnames';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  /** Tooltip的内容 */
  title: React.ReactNode;
  /** 触发方式 */
  trigger?: 'hover' | 'click' | 'focus';
  /** 气泡框位置 */
  placement?: TooltipPlacement;
  /** 子元素 */
  children: React.ReactElement;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 是否可见 */
  visible?: boolean;
  /** 鼠标移入后延时多少才显示 */
  mouseEnterDelay?: number;
  /** 鼠标移出后延时多少才隐藏 */
  mouseLeaveDelay?: number;
  /**
   * Callback executed when visibility of the tooltip changes
   */
  onVisibleChange?: (visible: boolean) => void;
  /**
   * 预设背景颜色
   */
  color?: string;
}

const Tooltip = forwardRef<any, TooltipProps>(
  (
    {
      title,
      trigger = 'hover',
      placement = 'top',
      children,
      className,
      style = {},
      visible,
      mouseEnterDelay = 0.1,
      mouseLeaveDelay = 0.1,
      onVisibleChange,
      color,
    },
    ref,
  ) => {
    const resetColor = color ? color : style['backgroundColor'];
    const triggerRef = useRef<any>(null);

    useImperativeHandle(ref, () => ({
      forceAlign: () => {
        if (triggerRef.current && triggerRef.current.forcePopupAlign) {
          triggerRef.current.forcePopupAlign();
        }
      },
    }));

    const overlay = (
      <div
        className={classNames('tooltip-content', className)}
        style={
          resetColor
            ? ({
                ['--tooltip-color' as string]: resetColor,
                ...style,
              } as React.CSSProperties)
            : style
        }
      >
        {title}
      </div>
    );

    const [internalVisible, setInternalVisible] = useState(false);

    const handleVisibleChange = (vis: boolean) => {
      setInternalVisible(vis);
      onVisibleChange?.(vis);
    };

    return (
      <Trigger
        ref={triggerRef}
        action={[trigger]}
        popup={overlay}
        popupPlacement={placement}
        popupClassName="tooltip-popup"
        mouseEnterDelay={mouseEnterDelay}
        mouseLeaveDelay={mouseLeaveDelay}
        popupVisible={visible !== undefined ? visible : internalVisible}
        destroyPopupOnHide={false}
        getPopupContainer={() => document.body}
        onPopupVisibleChange={handleVisibleChange}
        builtinPlacements={{
          top: {
            points: ['bc', 'tc'],
            offset: [0, -10],
            overflow: { adjustX: true, adjustY: true },
            targetOffset: [0, 0],
          },
          bottom: {
            points: ['tc', 'bc'],
            offset: [0, 10],
            overflow: { adjustX: true, adjustY: true },
            targetOffset: [0, 0],
          },
          left: {
            points: ['cr', 'cl'],
            offset: [-10, 0],
            overflow: { adjustX: true, adjustY: true },
            targetOffset: [0, 0],
          },
          right: {
            points: ['cl', 'cr'],
            offset: [10, 0],
            overflow: { adjustX: true, adjustY: true },
            targetOffset: [0, 0],
          },
        }}
      >
        {children}
      </Trigger>
    );
  },
);

export default Tooltip;
