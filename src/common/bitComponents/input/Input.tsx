import * as React from "react";
import styles from "./Input.module.css";
import classnames from "classnames/bind";
const cx = classnames.bind(styles);

interface InputProps {
  className?: string;
  placeholder: string;
  onChange?: (value: string) => void;
  value? : any
}

export const Input: React.FC<InputProps> = ({
  className,
  placeholder,
  onChange = (value) => {},
  value
}) => {
  return (
    <div>
      <input
        className={cx(className, "input")}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value = {value}
      />
    </div>
  );
};
