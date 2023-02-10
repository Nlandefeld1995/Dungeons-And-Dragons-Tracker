import classnames from "classnames/bind";
import React from "react";
import { CharacterSelector } from "../../redux/Character.slice";
import { useSelector } from "../../redux/reduxHooks";
import styles from "./Abilities.module.css";
import { AbilityRow } from "./AbilityRow/AbilityRow";

const cx = classnames.bind(styles);
const { useState, useEffect } = React;

export const Abilities = () => {
  const baseCharacter = useSelector(CharacterSelector);
  const { abilities, modifiers, proficiencyBonus = 0 } = baseCharacter;
  return (
    <div className={cx('flexColumn', styles.abilitiesContainer, 'flexGap-medium')}>
      {Object.keys(abilities).map((key) => (
        <AbilityRow
          key={key}
          ability={abilities[key]}
          modifier={modifiers[abilities[key].category]}
          proficiencyBonus={proficiencyBonus ?? 0}
        />
      ))}
      <div className={cx("boldTextOne")}>Saving Throw Modifiers</div>
    </div>
  );
};
