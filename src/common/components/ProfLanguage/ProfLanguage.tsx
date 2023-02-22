import classnames from "classnames/bind";
import React from "react";
import { CharacterSelector } from "../../redux/Character.slice";
import { useSelector } from "../../redux/reduxHooks";
import styles from "./ProfLanguage.module.css";

const cx = classnames.bind(styles);
const { useState, useEffect } = React;

const formatList = (list: string[]) => list.join(", ");

interface RowProps {
  text: string;
  list: string[];
}
const Row: React.FC<RowProps> = ({ text, list }) => {
  return (
    <div>
      <div className={cx("boldTextOne")}>{text}</div>
      <div className={cx(styles.listRow)}>{formatList(list)}</div>
    </div>
  );
};

export const ProfLanguage = () => {
  const baseCharacter = useSelector(CharacterSelector);
  const { profArmor, profWeapons, profTools, profLanguages } = baseCharacter;
  return (
    <div className={cx(styles.profLanguageContainer, "flexColumn")}>
      <Row text="Armor" list={profArmor ?? []} />
      <Row text="Weapons" list={profWeapons ?? []} />
      <Row text="Tools" list={profTools ?? []} />
      <Row text="Languages" list={profLanguages ?? []} />
      <div
        className={cx("boldTextOne", "margin-top-large", "text-align-center")}
      >
        PROFICIENCIES & LANGUAGES
      </div>
    </div>
  );
};
