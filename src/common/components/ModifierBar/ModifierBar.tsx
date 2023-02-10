import classnames from "classnames/bind";
import React from "react";
import { Character } from "../../models";
import { CharacterSelector } from "../../redux/Character.slice";
import { useSelector } from "../../redux/reduxHooks";
import styles from "./ModifierBar.module.css";
import { ModifierItem } from "./ModifierItem";

const cx = classnames.bind(styles);
const { useState, useEffect } = React;

export const ModifierBar = () => {
  const baseCharacter = useSelector(CharacterSelector);
  return (
    <div className={cx("displayFlex", "flexGap-medium")}>
      {Object.keys(baseCharacter.modifiers).map((key) => (
        <ModifierItem
          key={key}
          modifier={baseCharacter.modifiers[key]}
          onChange={(key, newTotal) => {}}
        />
      ))}
    </div>
  );
};
