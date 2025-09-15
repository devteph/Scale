import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/UI/Icon';
import { Tooltip } from 'react-tooltip';

function Button({
  loading = false,
  className,
  label = 'Button',
  onClick,
  icon,
  disabled,
  format,
  id,
  clickable,
  place,
  type,
  buttonFooter,
}) {
  const [hovered, setHovered] = useState(false);

  const visibilityClass = className === 'disabled' ? 'hidden w-0 p-0' : '';

  let typeClass = '';
  switch (type) {
    case 'primary':
      typeClass = `px-4 w-fit h-10 block flex items-center justify-center whitespace-nowrap text-16 text-white border border-white hover:bg-white hover:text-secondary transition-all duration-300`;
      break;
    case 'secondary':
      typeClass = `px-4 w-fit h-10 block flex items-center justify-center whitespace-nowrap text-16 border border-primary hover:text-white hover:bg-primary hover:border-primary transition-all duration-300`;
      break;
    case 'tertiary':
      typeClass = `px-4 w-fit h-13 block flex items-center justify-center whitespace-nowrap text-16 text-white bg-primary hover:opacity-80 transition-all duration-300`;
      break;
  }

  switch (format) {
    case 'action-button':
      return (
        <>
        <div
          disabled={disabled || loading}
          className={`${className} ${visibilityClass} ${typeClass}`}
          onClick={onClick}
          id={id}
          onMouseEnter={() => {
            setHovered(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
          }}
        >
          <Icon
            className={`flex items-center z-99 text-icon w-6 h-6 ${loading ? 'animate-spin' : ''}`}
            icon={`${loading ? 'progress_activity' : icon} ${hovered ? '' : ''}`}
            onClick={() => {}} 
          />
        </div>
        <Tooltip className="rounded-full" anchorId={id} clickable={clickable} variant={type} place={place}>
          {label}
        </Tooltip>
        </>
      );
    default:
      return (
        <button
          disabled={disabled || loading}
          className={`${className} ${visibilityClass} ${typeClass} !transition-colors !duration-500`}
          onClick={onClick}
        >
          {loading ? (
            <>
              <Icon className="flex items-center animate-spin text-icon w-6 h-6" size="medium" icon="progress_activity"/>
              {/* {loading ? 'Loading...' : ''} */}
            </>
          ) : (
            <>
            <div className={`flex gap-x-2.5 items-center ${buttonFooter ? 'flex-col' : 'flex-row'}`}>
              {icon && <Icon className={`flex items-center ${buttonFooter ? 'lg:hidden' : ''}`} size="medium" icon={icon} />}
              {label && label}
            </div>
            </>
          )}
        </button>
      );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,

  label: PropTypes.string,
  icon: PropTypes.string,
};

export default Button;
