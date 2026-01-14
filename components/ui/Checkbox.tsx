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
          w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 
          rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white 
          after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white 
          after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
          peer-checked:bg-blue-600 ${className}
        `}></div>
      </div>
      {label && (
        <label htmlFor={checkboxId} className="ml-3 text-sm font-medium text-gray-900 cursor-pointer select-none">
          {label}
        </label>
      )}
    </div>
  );
};
