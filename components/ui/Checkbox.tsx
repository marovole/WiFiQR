"use client";

import React, { useId } from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  className = '',
  id,
  ...props
}) => {
  const generatedId = useId();
  const checkboxId = id || props.name || generatedId;

  return (
    <div className="flex items-center">
      <div className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          id={checkboxId}
          className="sr-only peer"
          {...props}
        />
        <div className={`
          w-10 h-6 bg-gray-200 rounded-full
          peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-gray-900/10
          peer peer-checked:after:translate-x-4 peer-checked:after:border-white 
          after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white 
          after:rounded-full after:h-5 after:w-5 after:transition-all after:shadow-sm
          peer-checked:bg-gray-900 transition-colors duration-200 ${className}
        `}></div>
      </div>
      {label && (
        <label htmlFor={checkboxId} className="ml-3 text-sm text-gray-600 cursor-pointer select-none">
          {label}
        </label>
      )}
    </div>
  );
};
