import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  required,
  error,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col mb-6">
      <label className={text-orange-500 font-semibold mb-2 transition-all duration-300 ${isFocused || value ? 'text-orange-400' : ''}}>
        {label}
      </label>
      <motion.div
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={border-2 border-orange-500 rounded-lg p-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-300 ${error ? 'border-red-500' : ''}}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        required={required}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? ${label}-error : undefined}
      />
      {error && <span id={${label}-error} className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default Input;