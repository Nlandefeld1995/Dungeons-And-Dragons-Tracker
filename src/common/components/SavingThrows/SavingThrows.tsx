import classnames from "classnames/bind";
import React from "react";
import { CharacterSelector } from "../../redux/Character.slice";
import { useSelector } from "../../redux/reduxHooks";
import { SavingThrowRow } from "./SavingThrowRow";
import styles from "./SavingThrows.module.css";

const cx = classnames.bind(styles);
const { useState, useEffect } = React;

export const SavingThrows = () => {
  const baseCharacter = useSelector(CharacterSelector);
  const { savingThrows, proficiencyBonus, modifiers } = baseCharacter;
  return (
    <div
      className={cx(
        "flexColumn",
        styles.savingThrowsContainer,
        "flexAlignItemsCenter"
      )}
    >
      <div
        className={cx(
          "height-200",
          "flexColumn",
          "flexWrap",
          "width-250"
        )}
      >
        {Object.entries(savingThrows).map(([key, savingThrow]) => (
          <SavingThrowRow
            key={key}
            savingThrow={savingThrow}
            modifier={modifiers[savingThrow.id]}
            proficiencyBonus={proficiencyBonus ?? 0}
          />
        ))}
      </div>
      <div className={cx("boldTextOne")}>Saving Throw Modifiers</div>
    </div>
  );
};
