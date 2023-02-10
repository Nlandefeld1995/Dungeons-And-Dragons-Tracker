import classnames from "classnames/bind";
import React from "react";
import { calculateModifierBonus } from "../../../Utilities";
import { Modifier, SavingThrow } from "../../../models";
import styles from "./SavingThrowRow.module.css";
const cx = classnames.bind(styles);
const { useState, useEffect } = React;

interface SavingThrowRowProps {
  savingThrow: SavingThrow;
  proficiencyBonus: number;
  modifier: Modifier;
}
export const SavingThrowRow: React.FC<SavingThrowRowProps> = ({
  savingThrow,
  proficiencyBonus,
  modifier,
}) => {
  const modifierBonus = calculateModifierBonus(modifier?.total ?? 0);
  const bonus = proficiencyBonus + modifierBonus;
  return (
    <div className={cx("displayFlex", styles.savingThrowRow)}>
      {/* Need to update the proficiency circle to be actual circle and show */}
      <div>{savingThrow?.proficient ? "•" : "*"}</div>
      <div className={cx("margin-right-medium", "margin-left-medium")}>
        {savingThrow.id}
      </div>
      <div>{bonus}</div>
    </div>
  );
};
