import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Tags from '@yaireo/tagify/dist/react.tagify';
import '@yaireo/tagify/dist/tagify.css';
// import notify from '/utils/notify';

function Input({
  label,
  alertClass = 'text-alert', // Updated default value
  alertText,
  placeHolder = '',
  onChange,
  value,
  onClick,
  onClickIcon,
  type,
  password,
  disabled,
  readOnly,
  onEnter,
  onBlur,
  clipBoard,
  showAlert = false,
  validateText,
  validateWrap,
  icon,
  iconToLeft= false,
  onKeyDown,
  inputClassName = '',
  wrapperClassName,
  maxLenght,
  withDelete = false,
  onDelete,
  onDeleteLastTag,
  onPaste,
  roundedFull = false,
  // whitelist
}) {
  const [currentType, setCurrentType] = useState(type);
  const [currentValue, setCurrentValue] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const currentInput = useRef(null);

  const tagifyRef = useRef();
  const [tags, setTags] = useState('');
  const settings = {
    // whitelist,
    // enforceWhitelist: true,
    pattern: /^.{0,32}$/,
    dropdown: {
      enabled: 0
    }
  };

  const updateTags = useCallback((e) => {
    //https://github.com/yairEO/tagify/issues/537 //Issue onChange is not called when clearing the last tag
    if (e.detail.value) {
      setTags(e.detail.value);
    } else {
      onChange('');
    }
    // onChange(e.detail.value?.toLowerCase());
  }, []);

  useEffect(() => {
    if (tags) {
      onChange(tags);
    }
    //Adding click event listener on remove last tag
    if (typeof onDeleteLastTag === 'function') {
      setTimeout(() => {
        const xTagBtn = document.getElementsByClassName('tagify__tag__removeBtn');
        if (xTagBtn.length === 1) {
          xTagBtn[0].addEventListener("click", ()=> {
            onDeleteLastTag();
          });
        }
      }, 500);
    }
  }, [tags]);

  useEffect(() => {
    if (value) {
      setCurrentValue(value);
      if (type === 'tags') {
        setTags(value);
      }
    } else {
      setCurrentValue('');
      if (type === 'tags') {
        setTags('');
      }
    }
    setIsDisabled(disabled || false);
  }, [value, disabled, type]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    notify('Copied successfully!', 'success');
  };

  if (type === 'tags') {
    return (
      <div>
        {label && <label className={`mb-2.5 text-15m text-argent block`}>{label}</label>}
        <Tags
          className="tags"
          tagifyRef={tagifyRef}
          settings={settings}
          value={tags}
          onChange={(e) => {
            updateTags(e);
          }}
        />
        {alertText && showAlert && <p className={alertClass}>{alertText}</p>}
      </div>
    );
  }

  return (
    <div className={`w-full flex flex-col gap-y-5 wide:gap-y-7.5 ${wrapperClassName}`}>
      <div className="relative group">
          <input
            className={`relative w-full h-14 px-4 text-16m text-black uppercase border-2 outline-none focus:border-transparent focus:ring-2 invalid:ring-alert placeholder:text-grey :fill-none transition-all duration-300
            ${inputClassName} 
            ${alertText || validateWrap ? 'border-transparent ring-2 ring-alert' : 'border-inputs focus:ring-black'} 
            ${validateText ? 'text-alert' : ''}
            ${iconToLeft ? 'pl-12' : ''}
            ${currentValue ? 'focus:border-black focus:ring-black border-2' : ''}
            disabled:bg-secondary disabled:border-borders disabled:text-detail disabled:cursor-not-allowed
            `}
            placeholder={placeHolder}
            type={currentType}
            ref={currentInput}
            value={currentValue}
            onChange={(e) => {
              if (!maxLenght || (maxLenght && e.target.value.length <= maxLenght)) {
                if (onChange) {
                  onChange(e.target.value);
                }
                setCurrentValue(e.target.value);
              }
            }}
            onClick={onClick}
            disabled={isDisabled}
            readOnly={readOnly}
            //onKeyDown={onEnter}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && onEnter) {
                onEnter(e.target.value);
                setCurrentValue(e.target.value);
              }
            }}
            onBlur={(e) => {
              if (onBlur) {
                onBlur(e.target.value);
              }
            }}
            onPaste={onPaste}
          />
        {/* </div> */}
        {icon && (
          <Icon
            className={`w-6 h-6 absolute bottom-0 -translate-y-1/2 icon text-grey group-focus-within:text-black flex justify-center items-center cursor-pointer
            ${iconToLeft ? 'left-3' : 'right-3.5'}`}
            icon={icon}
            onClick={() => {
              if (typeof onClickIcon === 'function') {
                onClickIcon();
              }
            }}
          />
        )}
        {type === 'password' &&
          (currentType === 'password' ? (
            <div
              className="absolute bottom-0 right-3 h-12 flex justify-center items-center w-6 cursor-pointer"
              onClick={() => setCurrentType('text')}
            >
              <span className="w-6 h-12 !flex items-center justify-center material-symbols-outlined text-icon">
                visibility
              </span>
            </div>
          ) : (
            <div
              className="absolute bottom-0 right-3 h-12 flex justify-center items-center w-6 cursor-pointer transparent"
              onClick={() => setCurrentType('password')}
            >
              <span className="w-6 h-12 !flex items-center justify-center material-symbols-outlined text-icon">
                visibility_off
              </span>
            </div>
          ))
        }
        {type === 'date' &&
          <div
            className={`absolute bottom-0 right-3 h-12 !flex justify-center items-center w-6 cursor-pointer
            ${iconToLeft ? 'left-3' : 'right-3.5'}`}
            icon={icon}
            onClick={() => setCurrentType('text')}
          >
          </div>
        }
        {clipBoard && (
          <div
            className="absolute bottom-0 right-3 h-12 flex justify-center items-center w-6 cursor-pointer transparent" 
            onClick={() => copyToClipboard(value)}
          >
            <span className="w-6 h-12 !flex items-center justify-center material-symbols-outlined text-icon">
              content_copy
            </span>
          </div>
        )}
        {withDelete && (
          <div
            className='absolute bottom-0 right-3 h-12 flex justify-center items-center w-6 cursor-pointer'
            onClick={() => {
              if (onDelete) {
                onDelete();
              } else {
                notify("Not a delete function", "error");
              }
            }}
          >
            <span className="w-6 h-12 !flex items-center justify-center material-symbols-outlined text-icon">
              delete
            </span>
          </div>
        )}
      </div>
      {alertText && <p className={`-mt-3 mb-0 mx-0 text-13 ${alertClass}`}>{alertText}</p>}
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  placeHolder: PropTypes.string,
  alertClass: PropTypes.oneOf(['error', 'success']),
  alertText: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email', 'tags']),
  password: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  recover: PropTypes.bool,
  onEnter: PropTypes.func,
  onBlur: PropTypes.func,
  whitelist: PropTypes.string,
  clipBoard: PropTypes.bool,
  showAlert: PropTypes.bool,
  validateText: PropTypes.string,
  validateWrap: PropTypes.string,
  inputClassName: PropTypes.string,
  icon: PropTypes.string,
  onClickIcon: PropTypes.func,
  wrapperClassName: PropTypes.string,
  iconToRight: PropTypes.bool,
  maxLenght: PropTypes.number,
  withDelete: PropTypes.bool,
  onDelete: PropTypes.func,
  onDeleteLastTag: PropTypes.func,
  onPaste: PropTypes.func,
};

export default Input;
