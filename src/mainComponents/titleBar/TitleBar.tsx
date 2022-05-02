import * as React from "react";
import styles from "./TitleBar.module.css";
import common from "../../common/styles/common.module.css";
import classnames from "classnames/bind";
import { useAction, useSelector } from "../../common/redux/reduxHooks";
import { ACTIONS, StoreView } from "../../common/redux/globalStore";
const cx = classnames.bind({ ...styles, ...common });

export const TitleBar = () => {
  const setView = useAction(ACTIONS.UPDATE_VIEW);
  const view = useSelector(StoreView);
  return (
    <div className={cx("header-div", "margin-top-sm", "margin-bottom-sm")}>
      {view !== "home" && (
        <div
          className={cx("clickable", "exit-button", "margin-left-sm")}
          onClick={() => {
            setView("home");
          }}
        >
          X
        </div>
      )}

      <div className={cx("header-title")}>Voodoo & Dragons</div>
    </div>
  );
};
