import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { Tooltip } from 'react-tooltip';

function ButtonIcon({
  variant = 'primary',
  className,
  icon = 'check',
  onClick,
  muted = false,
  tooltipText,
  id
}) {

  let visibilityClass;
  
  switch (variant) {
    case 'primary':
      visibilityClass = 'rounded-2xl border-2 border-white-smoke hover:opacity-80';
      break;
    case 'secondary':
      visibilityClass = 'text-alert';
      break;
    default:
      break;
  }

  return (
    <button
      className={`w-6 h-6 flex justify-center items-center transition-all duration-300 ${visibilityClass} ${className}`}
      onClick={() => {
        if (!muted) {
          onClick();
        }
      }}
      id={id}
    >
      <Icon className="flex items-center" icon={icon} />
      { tooltipText && (
        <Tooltip className="rounded-full" anchorId={id} clickable={false}>
          {tooltipText}
        </Tooltip>
      )}
    </button>
  );
}

ButtonIcon.propTypes = {
  /**
   * Wich Style the button is going to be?
   */
  className: PropTypes.oneOf(['primary', 'secondary', 'disabled', 'active']),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Button icon
   */
  icon: PropTypes.string,
  /**
   * Optional Loading
   */
  label: PropTypes.string,
  
};

export default ButtonIcon;
