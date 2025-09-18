import React from 'react';
import PropTypes from 'prop-types';
import localFont from 'next/font/local';

const Roboto = localFont({
  src: [
    {
      path: '../../../public/fonts/Roboto/RobotoMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
})

function TextArea(
  {
    label,
    alert,
    alertText,
    placeHolder,
    onChange,
    value,
    onClick,
    disabled,
    readOnly,
    maxLength,
    inputClassname,
    validateText,
    validateWrap,
    currentValue
  }
) {
  return (
    <div className={`flex flex-col mb-5 relative ${alertText ? alert : ''}`}>{/* TextAreaContainer */}
      <div className='flex relative flex-col-reverse'>{/* TextAreaInner */}
        <div className='absolute top-0 right-0'>{maxLength}</div>
        <textarea
          className={`relative w-full h-28 p-4 text-16m text-primary uppercase border-2 outline-none focus:border-transparent focus:ring-2 invalid:ring-alert placeholder:text-grey :fill-none transition-all duration-300 resize-none
            ${Roboto.className} ${alertText || validateWrap ? 'border-transparent ring-2 ring-alert' : 'border-inputs focus:ring-primary'} 
            ${validateText ? 'text-alert' : ''}
            ${currentValue ? 'focus:border-primary focus:ring-primary border-2' : ''}
            disabled:bg-secondary disabled:border-borders disabled:text-detail disabled:cursor-not-allowed
            `}
          placeholder={placeHolder}
          value={value}
          // onChange={(e) => onChange(e.target.value)}
          onClick={onClick}
          disabled={disabled}
          readOnly={readOnly}
        />
        {label && (
          <label className="mt-0 mb-1 mx-0 text-14md">
            {label}
          </label>
        )}
      </div>
      {(alert && alertText) && (
        <p className={`mt-2 mb-0 mx-0 ${alert}`}>
          {alertText}
        </p>
      )}
    </div>
  );
}

/*
  margin: 10px 0 0;
  line-height: 16px;
*/

TextArea.propTypes = {
  /**
   * TextArea label
   */
  label: PropTypes.string,
  /**
   * TextArea PlaceHolder
   */
  placeHolder: PropTypes.string,
  /**
   * Alert type
   */
  alert: PropTypes.oneOf(['error']),
  /**
   * Alert type
   */
  alertText: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Optional change handler
   */
  onChange: PropTypes.func,
  /**
   * TextArea value
   */
  value: PropTypes.string,
  /**
   * Password type
   */
  password: PropTypes.bool,
  /**
   * Disabled prop
   */
  disabled: PropTypes.bool,
  /**
   * Read Only prop
   */
  readOnly: PropTypes.bool,
  /**
  * Read Only prop
  */
  maxLength: PropTypes.string
};

TextArea.defaultProps = {
  placeHolder: '',
  alert: 'error'
};

export default TextArea;
