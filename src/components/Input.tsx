import { motion, Variants } from 'framer-motion';
import { useState, ChangeEvent, KeyboardEvent } from 'react';

interface InputProps {
  id?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
  label?: string;
  type?: "text" | "password" | 'number';
  className?: string;
  labelClassName?: string
  maxLen?: number;
  onEnterClick?: () => void;
  autoFocus?: boolean;
  active?: boolean
}

const inputVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 }
};

const Input = ({
  id = "input",
  onChange,
  value = '',
  placeholder,
  label,
  type = "text",
  className,
  labelClassName,
  maxLen = 99,
  onEnterClick,
  active = true,
  autoFocus = false
}: InputProps) => {
  const [inputValue, setInputValue] = useState(value);

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(active) {
      setInputValue(e.target.value);
      if (onChange) {
        onChange(e);
      }
    }
  };

  const onHandleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onEnterClick) {
      onEnterClick();
    }
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={inputVariants}>
      {label && (
        <label htmlFor={id} className={`block font-medium mb-1 ${labelClassName}`}>
          {label}
        </label>
      )}
      <motion.input
        id={id}
        type={type}
        className={`px-4 py-2 border-2 border-gray-300 bg-inherit rounded-md sm:w-64 md:w-96 m-1 outline-none focus:border-[#32db89] ${className}`}
        onKeyDown={onHandleKeyDown}
        onChange={onHandleChange}
        value={inputValue}
        placeholder={placeholder}
        autoComplete="off"
        maxLength={maxLen}
        autoFocus={autoFocus}
      />
    </motion.div>
  );
};

export default Input;
