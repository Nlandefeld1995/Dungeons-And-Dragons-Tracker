import classnames from "classnames/bind";
import React from "react";
import { calculateModifierBonus } from "../../Utilities";
import { CharacterSelector } from "../../redux/Character.slice";
import { useSelector } from "../../redux/reduxHooks";
import styles from "./Senses.module.css";

const cx = classnames.bind(styles);
const { useState, useEffect } = React;

export const Senses = () => {
  const baseCharacter = useSelector(CharacterSelector);
  const { proficiencyBonus, abilities, modifiers } = baseCharacter;
  const modifierBonus = calculateModifierBonus(modifiers.WIS.total ?? 0);
  const passiveWisdomScore = abilities.Perception.proficient
    ? proficiencyBonus ?? 0 + modifierBonus
    : modifierBonus;

  return (
    <div className={cx(styles.sensesContainer, "flexColumn")}>
      <div
        className={cx(
          "displayFlex",
          "flexAlignItemsCenter",
          
        )}
      >
        <div className={cx(styles.pasWisdomScore, "text-align-center")}>{passiveWisdomScore}</div>
        <div className={cx(styles.pasWisdomText, "width-200")}>
          Passive Wisdom
        </div>
      </div>
      <div
        className={cx("boldTextOne", "margin-top-large", "text-align-center")}
      >
        Senses
      </div>
    </div>
  );
};
