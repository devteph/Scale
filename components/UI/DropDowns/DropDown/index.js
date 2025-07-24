import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import notify from 'utils/notify';

function DropDown({
  options,
  value,
  onChange,
  label,
  labelField,
  labelField2,
  attribute,
  alertText,
  disabled,
  placeHolder,
  emptyOption,
  emptyOptionLabel,
  wrapperClassName = '',
  variant = 'selectBackoffice',
  wrapperWidth = variant === 'selectFront' ? 'w-fit' : 'w-full',
  alertClass = 'error',
  disabledMsg,
  
}) {
  const [currentValue, setCurrentValue] = useState(null);
  const [currentOptions, setCurrentOptions] = useState([]);
  const resolvedWrapperWidth = variant === 'selectFront' ? 'w-fit' : 'w-full';

  useEffect(() => {
    if (options && Array.isArray(options)) {
      const newOptions = emptyOption ? [{ label: emptyOptionLabel || 'Selecciona', value: '' }] : [];
      const formattedOptions = options.map((option) => ({
        label: `${option[labelField]} ${labelField2 ? option[labelField2] : ''}`,
        value: option[attribute],
        isDisabled: option.disabled,
      }));
      newOptions.push(...formattedOptions);
      setCurrentOptions(newOptions);
    }
  }, [options, labelField, labelField2, attribute]);

  useEffect(() => {
    if (value && currentOptions.length > 0) {
      const selectedOption = currentOptions.find((option) => option.value === value);
      setCurrentValue(selectedOption || null);
    } else {
      setCurrentValue(null);
    }
  }, [value, currentOptions]);

  function handleChange(selectedOption) {
    setCurrentValue(selectedOption);
    onChange(selectedOption ? selectedOption.value : '');
  }

  return (
    <div className={`${wrapperWidth} ${wrapperClassName} ${alertText ? alertClass : 'flex flex-col gap-y-7.5'}`}>
      <div className="relative group">
        {label && <label className={`mb-2.5 text-16m text-argent block`}>{label}</label>}
        <div className={`relative ${alertText ? 'focus-within:error-shadow' : ''}`}>
          {disabled && disabledMsg && (
            <div
              className='w-full h-5 bg-transparent absolute z-50'
              onClick={() => notify(disabledMsg, "error")}
            />
          )}
          <Select
            value={currentValue}
            options={currentOptions}
            onChange={handleChange}
            isDisabled={disabled}
            isClearable={false}
            placeholder={placeHolder || 'Selecciona'}
            className={`
              ${alertText ? 'border-alert text-alert' : ''}
              capitalize
            `}
            selectProps={{ alertText, variant }}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                padding: '0 6px',
                minHeight: '48px',
                fontSize: variant === 'selectBackoffice' ? '15px' : '18px',
                lineHeight: '24px',
                fontWeight: '500',
                borderRadius: '8px',
                borderWidth: '2px',
                color: state.isDisabled ? '#727A87' : '#363A3F',
                borderWidth: variant === 'selectBackoffice' ? '2px' : 'none',
                borderColor: state.isFocused ? 'transparent' : (disabled ? '#E2E3E6' : (alertText ? '#DC2424' : '#DDD')),
                boxShadow: variant === 'selectBackoffice'
                ? (state.isFocused ? '0 0 0 2px #000' : 'none')
                : 'none',
                backgroundColor: state.isDisabled ? '#EEF0F3' : 'none',
                cursor: 'pointer',
                '&:hover': {
                  borderColor: 'none',
                },
              }),
              menu: (base) => ({
                ...base,
                zIndex: '500', 
                padding: '10px',
              }),
              indicatorsContainer: (base) => ({
                ...base,
                paddingLeft:  variant === 'selectBackoffice' ? 'none' : '12px',
                marginLeft:  variant === 'selectBackoffice' ? 'none' : '20px',
                marginRight: '0px',
                height: '48px',
                width: variant === 'selectBackoffice' ? '24px' : '48px',
                borderRadius:  variant === 'selectBackoffice' ? 'none' : '100%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'center',
                backgroundColor: variant === 'selectBackoffice' ? '' : '#f5f5f5',
              }),
              dropdownIndicator: (base, state) => ({
                ...base,
                width: variant === 'selectBackoffice' ? '24px' : '24px',
                height: '24px',
                padding: '0px',
                margin: '0px',
                transition: 'transform 0.2s ease',
                display: 'flex',
                flexDirection: 'center',
              }),
              placeholder: (baseStyles) => ({
                ...baseStyles,
                color: 'rgba(54, 58, 63, 0.5)',
                textTransform: 'none',
              }),
              singleValue: (baseStyles, state) => ({
                ...baseStyles,
                color: state.isDisabled ? '#727A87' : '', 
                fontSize: variant === 'selectBackoffice' ? '15px' : '18px',
                lineHeight: '24px',
                fontWeight: '500',
              }),
              option: (baseStyles, state) => ({
                ...baseStyles,
                fontSize: variant === 'selectBackoffice' ? '15px' : '18px',
                lineHeight: '24px',
                fontWeight: '500',
                backgroundColor: state.isSelected ? '#EEF0F3' : 'transparent',
                color: state.isSelected ? 'black' : '',
                borderRadius: state.isSelected ? '8px' : '',
                opacity: 1,
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: '#EEF0F3',
                  borderRadius: '8px'
                },
              }),
            }}
          />
        </div>
      </div>
      {alertText && <p className={`${alertClass} mt-2 mb-0 mx-0 text-13 text-alert`}>{alertText}</p>}
    </div>
  );
}

// ... (PropTypes remain the same)

export default DropDown;
