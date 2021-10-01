import * as React from "react";
import * as commonStyles from "./common/styles/common.module.css";
import * as appStyles from "./App.css";
import * as classnames from "classnames/bind";
import { ResizableDivWidth } from "./common/components/ResizableDivWidth";
import { ResizableDivHeight } from "./common/components/ResizableDivHeight";
const cx = classnames.bind({ ...commonStyles, ...appStyles });

function App() {
  return (
    <>
      <div className={cx("top-bar-div")}>
        <div>setting</div>
        <div>PlayerInfo</div>
        <div>View Select</div>
        <div>QuickLinks</div>
      </div>

      <div className={cx("main-container")}>
        <ResizableDivWidth
          inputWidth="25vw"
          innerDiv={<div className={cx("left-container")}>Left</div>}
        />

        <ResizableDivWidth
          inputWidth="50vw"
          innerDiv={<div className={cx("middle-container")}>MiddleBar</div>}
        />
        <div className={cx("right-container")}>
          <ResizableDivHeight
            inputHeight="50vh"
            innerDiv={
              <div className={cx("right-container-one")}>rightbar1</div>
            }
          />

          <div className={cx("right-container-two")}>rightbar2</div>
        </div>
      </div>
    </>
  );
}

export default App;
