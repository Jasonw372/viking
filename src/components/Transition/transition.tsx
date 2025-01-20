import React from 'react';
import { CSSTransition } from 'react-transition-group';
import type { CSSTransitionProps } from 'react-transition-group/CSSTransition';

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right';

type TransitionProps = {
  animation?: AnimationName; // 动画名称，可选
  wrapper?: boolean; // 是否使用包装器，可选
  children: React.ReactNode; // 子节点，必需
} & Omit<CSSTransitionProps, 'nodeRef'>; // 继承 CSSTransitionProps，但排除 nodeRef 属性

const Transition: React.FC<TransitionProps> = props => {
  const {
    children,
    classNames,
    animation,
    wrapper,
    unmountOnExit = true,
    appear = true,
    ...restProps
  } = props;

  const nodeRef = React.useRef<HTMLDivElement>(null);
  return (
    <CSSTransition
      classNames={classNames ? classNames : animation}
      unmountOnExit={unmountOnExit}
      appear={appear}
      nodeRef={nodeRef}
      addEndListener={() => {}}
      {...restProps}
    >
      {wrapper ? (
        <div ref={nodeRef}>{children}</div>
      ) : (
        React.cloneElement(children as React.ReactElement, {
          ref: nodeRef,
        })
      )}
    </CSSTransition>
  );
};

export default Transition;
