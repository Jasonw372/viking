import classNames from 'classnames';
import React, { useState } from 'react';
import Icon from '../Icon';

type AlertType = 'success' | 'info' | 'error' | 'warning';

export interface AlertProps {
  title?: string;
  message: string;
  type: AlertType;
  closable?: boolean;
  showIcon?: boolean;
  onClose?: () => void;
  action?: React.ReactNode;
}

const getIconByType = (type: AlertType) => {
  switch (type) {
    case 'success':
      return <Icon icon="check-circle" />;
    case 'info':
      return <Icon icon="info-circle" />;
    case 'error':
      return <Icon icon="exclamation-circle" />;
    case 'warning':
      return <Icon icon="exclamation-triangle" />;
    default:
      return null;
  }
};

const Alert: React.FC<AlertProps> = props => {
  const {
    title,
    message,
    type = 'info',
    closable = false,
    showIcon = false,
    onClose,
    action,
  } = props;
  const [visible, setVisible] = useState(true);

  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setVisible(false);
    if (onClose) {
      onClose();
    }
  };

  const className = classNames('alert', {
    'alert-success': type === 'success',
    'alert-info': type === 'info',
    'alert-danger': type === 'error',
    'alert-warning': type === 'warning',
    'alert-dismissible': closable,
    'alert-hidden': !visible,
  });

  if (!visible) {
    return null;
  }

  return (
    <div className={className}>
      <div className="alert-left">
        {showIcon && <span className="alert-icon">{getIconByType(type)}</span>}
        <div className="alert-message">
          {title && <div className="alert-title">{title}</div>}
          <div className="alert-content">{message}</div>
        </div>
      </div>
      <div className="alert-right">
        {closable && (
          <span className="alert-close" onClick={handleClose}>
            <Icon icon="times" className="close-icon" />
          </span>
        )}
        {action && <div className="alert-action">{action}</div>}
      </div>
    </div>
  );
};

export default Alert;
