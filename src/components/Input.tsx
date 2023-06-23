import { motion, Variants } from 'framer-motion';
import { useState, ChangeEvent } from 'react';

interface InputProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
  label?: string; 
  type?: "text" | "password"
  className?: string,
  maxLen?: number
}

const inputVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 }
};

const Input = (props: InputProps) => {
  const inputType = props.type || "text";
  const maxLen = props.maxLen || 99


  const [value, setValue] = useState(props.value || '');

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={inputVariants}
      >
        <label htmlFor="input" className="block font-medium mb-1">
          {props.label} {/* Render the label text */}
        </label>
        <motion.input
          id="input"
          type={inputType}
          className={`px-4 py-2 border border-gray-300 rounded-md sm:w-64 md:w-96 m-1 ${props.className}`}
          onChange={onHandleChange}
          value={value}
          placeholder={props.placeholder}
          autoComplete='off'
          maxLength={maxLen}
        />
      </motion.div>
    </>
  );
};

export default Input;

