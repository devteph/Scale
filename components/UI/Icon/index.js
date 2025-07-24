import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import useOnClickOutside from '/hooks/useOutsideClick';

function Icon({
  className = 'icon',
  icon = 'icon-search',
  onClick = undefined,
  active = false,
  draggable,
  floatingMenu,
  position,
  setOpenFloat,
  openFloat,
  iconSize = 'text-icon'
}) {
  const floatRef = useRef();

  // eslint-disable-next-line consistent-return
  useOnClickOutside(floatRef, () => {
    setOpenFloat(false);
  });

  const floatPosition = (position) => {
    let className = '';
    switch (position) {
      case 'left':
        className = 'mr-32'
        break;
      case 'right':
        className = 'ml-32'
        break;
      case 'bottom':
        className = 'mt-32'
        break
      default:
        className = '-mt-32'
        break;
    }

    return className;
  }

  return (
    <>
      <div
        className={`
          ${className} ${active ? 'active' : ''}
          ${draggable && 'cursor-move'}
        `}
        onClick={onClick}
      >
        <span className={`flex items-center material-symbols-outlined ${iconSize}`}>
          {icon}
        </span>
      </div>
      {floatingMenu && openFloat && (
        <div
          className={`border bg-white rounded-md fixed ${floatPosition(position)} z-99`}
          ref={floatRef}
        >
          {floatingMenu.options.map((option) => {
            const {
              label,
              icon,
              className: classNameOption,
              onClick: onClickOption
            } = option;
            return (
              <div
                key={label}
                className="flex gap-x-5 hover:bg-gray group"
                onClick={() => {
                  setOpenFloat(false);
                  onClickOption();
                }}
              >
                <Icon
                  icon={icon}
                  className={`transparent cursor-pointer flex items-center ${iconSize}`}
                />
                <p className={`${classNameOption || 'text-gray-700  group-hover:text-black'} `}>{label}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

Icon.propTypes = {
  /**
     * Wich style the Icon is going to be?
     */
  className: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Wich style the Icon is going to be?
   */
  icon: PropTypes.string,
  /**
   * Wich status has the button
   */
  active: PropTypes.bool
};

export default Icon;
