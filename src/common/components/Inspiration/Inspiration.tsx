import React from "react";
import classnames from "classnames/bind";
import styles from "./Inspiration.module.css";
import { useSelector } from "../../redux/reduxHooks";
import { CharacterSelector } from "../../redux/Character.slice";

const cx = classnames.bind(styles);
const { useState, useEffect } = React;

export const Inspiration = () => {
  const baseCharacter = useSelector(CharacterSelector);
  const [showImg, setShowImg] = useState(baseCharacter.inspiration);
  return (
    <div className={cx("inspirationArea")}>
      <div
        className={cx("inspirationContainer")}
        onClick={() => setShowImg(!showImg)}
      >
        {/* img goes here */}
      </div>

      <div className={cx('boldTextOne')}>Inspiration</div>
    </div>
  );
};
