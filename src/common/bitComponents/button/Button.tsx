import * as React from "react";
import styles from "./Button.module.css";
import classnames from "classnames/bind";
const cx = classnames.bind(styles);

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  label: string;
}

export const Button: React.FC<ButtonProps> = ({
  onClick = () => {},
  className,
  label,
}) => {
  return (
    <>
      <button className={cx(className, "button")} onClick={() => onClick()}>
        {label}
      </button>
    </>
  );
};
