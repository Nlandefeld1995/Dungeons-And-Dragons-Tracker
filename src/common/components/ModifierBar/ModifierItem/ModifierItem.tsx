import classnames from "classnames/bind";
import React from "react";
import { Modifier } from "../../../models";
import styles from "./ModifierItem.module.css";

const cx = classnames.bind(styles);
const { useState, useEffect } = React;

interface ModifierItemProps {
  modifier: Modifier;
  onChange: (key: string, newTotal: number) => void;
}

export const ModifierItem: React.FC<ModifierItemProps> = ({
  modifier,
  onChange,
}) => {
  const modifierValue = Math.floor((modifier.total - 10) / 2);
  return (
    <div>
      <div>{modifier.label}</div>
      <div>{modifierValue}</div>
      <div>{modifier.total}</div>
    </div>
  );
};
