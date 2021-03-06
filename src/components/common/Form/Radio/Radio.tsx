import React from 'react';

import { RadioPropsType } from './types';

import './Radio.scss';

const Radio = ({ name, label, id, isChecked, onChange }: RadioPropsType) => {
  const handleChange = (): void => {
    onChange(id);
  };

  return (
    <div className="radio">
      <input
        className="radio__input"
        type="radio"
        id={name}
        name={name}
        checked={isChecked}
        onChange={handleChange}
      />
      <label className="radio__label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export { Radio };
