import React from "react";
import classnames from "classnames/bind";
import styles from "./ModifierBar.module.css";
import { Character } from "../../models";
import { ModifierItem } from "./ModifierItem";
import { useSelector } from "../../redux/reduxHooks";
import { CharacterSelector } from "../../redux/Character.slice";

const cx = classnames.bind(styles);
const { useState, useEffect } = React;

export const ModifierBar = () => {
  const baseCharacter = useSelector(CharacterSelector);
  return (
    <div>
      {Object.keys(baseCharacter.modifiers).map((key) => (
        <ModifierItem
          modifier={baseCharacter.modifiers[key]}
          onChange={(key, newTotal) => {}}
        />
      ))}
    </div>
  );
};
