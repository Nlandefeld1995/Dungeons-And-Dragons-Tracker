import classnames from "classnames/bind";
import React from "react";
import { Abilities } from "../common/components/Abilities";
import { Inspiration } from "../common/components/Inspiration";
import { ModifierBar } from "../common/components/ModifierBar";
import { ProfLanguage } from "../common/components/ProfLanguage";
import { SavingThrows } from "../common/components/SavingThrows";
import { Senses } from "../common/components/Senses";
import styles from "./DungeonsDragonsTracker.module.css";

const cx = classnames.bind(styles);
const { useState, useEffect } = React;

export const DungeonsDragonsTracker = () => {
  return (
    <div className={cx("trackerMain")}>
      <div className={cx("headerBar")}>
        <div>Menu</div>
        <div>character/player info </div>
        <div> save button</div>
      </div>
      <div className={cx("flexColumn", 'flexJustifyContentSpaceEvenly')}>
        <div className={cx("displayFlex", styles.rowOne, 'flexJustifyContentSpaceEvenly')}>
          <ModifierBar /> <Inspiration />
          <div>hit points</div>
        </div>
        <div className={cx("displayFlex", 'flexJustifyContentSpaceEvenly')}>
          <div className={cx("flexColumn", 'flexJustifyContentSpaceEvenly')}>
            <SavingThrows />
            <Senses />
            <ProfLanguage />
          </div>
          <Abilities />
          <div className={cx("flexColumn", 'flexJustifyContentSpaceEvenly')}>
            <div className={cx("displayFlex")}>
              <div>Initiative</div>
              <div>Armor class</div>
              <div>Defenses / conditions</div>
            </div>
            <div>ActionTable TBD</div>
          </div>
        </div>
      </div>
    </div>
  );
};
