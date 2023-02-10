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

  return (
    <div className={cx('displayFlex', 'flexColumn',styles.savingThrowsContainer,'flexAlignItemsCenter')}>
    <div
      className={cx(
        "displayFlex",
        "height-200",
        "flexColumn",
        "flexWrap",
        "width-250"
      )}
    >
      {Object.entries(baseCharacter.savingThrows).map(([key, savingThrow]) => (
        <SavingThrowRow savingThrow={savingThrow} />
      ))}
      
    </div>
    <div className={cx('boldTextOne')}>Saving Throw Modifiers</div>
    </div>
  );
};
