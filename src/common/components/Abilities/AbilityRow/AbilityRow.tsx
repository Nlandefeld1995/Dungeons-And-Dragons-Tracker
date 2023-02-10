import classnames from "classnames/bind";
import React from "react";
import { calculateModifierBonus } from "../../../Utilities";
import { Ability, Modifier } from "../../../models";
import { CharacterSelector } from "../../../redux/Character.slice";
import { useSelector } from "../../../redux/reduxHooks";
import styles from "./AbilityRow.module.css";

const cx = classnames.bind(styles);
const { useState, useEffect } = React;

interface AbilityRowProps {
  ability: Ability;
  proficiencyBonus: number;
  modifier: Modifier;
}

export const AbilityRow: React.FC<AbilityRowProps> = ({
  ability,
  proficiencyBonus,
  modifier,
}) => {
  const modifierBonus = calculateModifierBonus(modifier?.total ?? 0);
  return (
    <div className={cx(styles.abilityRowContainer)}>
      {/* Need to update later */}
      <div>{ability.proficient ? "*" : "-"}</div>
      <div>{ability.category}</div>
      <div className={cx('noWrap')}>{ability.label}</div>
      <div>
        {ability.proficient ? proficiencyBonus + modifierBonus : modifierBonus}
      </div>
    </div>
  );
};
