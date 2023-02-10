import classnames from "classnames/bind";
import React from "react";
import { SavingThrow } from "../../../models";
import { CharacterSelector } from "../../../redux/Character.slice";
import { useSelector } from "../../../redux/reduxHooks";
import styles from "./SavingThrowRow.module.css";
const cx = classnames.bind(styles);
const { useState, useEffect } = React;

interface SavingThrowRowProps {
  savingThrow: SavingThrow;
}
export const SavingThrowRow: React.FC<SavingThrowRowProps> = ({
  savingThrow,
}) => {
  const baseCharacter = useSelector(CharacterSelector);
  const bonus =
    baseCharacter.proficiencyBonus ??
    0 + (baseCharacter.modifiers[savingThrow.id]?.total ?? 10 - 10) / 2;
  return (
    <div className={cx('displayFlex', styles.savingThrowRow)}>
        {/* Need to update the proficiency circle to be actual circle and show */}
      <div>{savingThrow?.proficient ? '•' : '*'}</div>
      <div className={cx('margin-right-medium', 'margin-left-medium')}>{savingThrow.id}</div>
      <div>{bonus}</div>
    </div>
  );
};
