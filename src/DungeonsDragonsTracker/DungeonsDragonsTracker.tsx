import classnames from "classnames/bind";
import React from "react";
import { Inspiration } from "../common/components/Inspiration";
import { ModifierBar } from "../common/components/ModifierBar";
import { SavingThrows } from "../common/components/SavingThrows";
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
      <div className={cx("mainBody")}>
        <div>
          <ModifierBar /> <Inspiration />
          <div>hit points</div>
        </div>
        <div>
          <SavingThrows />
          <div>Senses</div>
          <div>Proficencies & language</div>
        </div>
        <div>Skills</div>
        <div>
          <div>
            <div>Initiative</div>
            <div>Armor class</div>
            <div>Defenses / conditions</div>
          </div>
          <div>ActionTable TBD</div>
        </div>
      </div>
      <div>
        <div>SavingThrows</div>
        <div>Senses</div>
        <div>Proficencies & language</div>
      </div>
      <div>Skills</div>
      <div>
        <div>
          <div>Initiative</div>
          <div>Armor class</div>
          <div>Defenses / conditions</div>
        </div>
        <div>ActionTable TBD</div>
      </div>
    </div>
  );
};
