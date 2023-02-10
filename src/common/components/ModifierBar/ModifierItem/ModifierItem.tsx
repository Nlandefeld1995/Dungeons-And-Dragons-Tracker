import classnames from "classnames/bind";
import React from "react";
import { Modifier } from "../../../models";
import styles from "./ModifierItem.module.css";

const cx = classnames.bind(styles);
const { useState, useEffect } = React;

interface ModiferItemProps {
  modifier: Modifier;
  onChange: (key: string, newTotal: number) => void;
}

export const ModifierItem: React.FC<ModiferItemProps> = ({
  modifier,
  onChange,
}) => {
  return <>{modifier.label}</>;
};
