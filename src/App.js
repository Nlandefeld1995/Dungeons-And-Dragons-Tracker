import * as React from "react";
import * as commonStyles from "./common/styles/common.module.css";
import * as appStyles from "./App.css";
import * as classnames from "classnames/bind";
import { ResizableDivWidth } from "./common/components/resizableComponents/ResizableDivWidth";
import { ResizableDivHeight } from "./common/components/resizableComponents/ResizableDivHeight";
import { TopBar } from "./mainComponents/topBar/TopBar";
import { DropMenu } from "./common/components/dropDownMenu/DropMenu";
const cx = classnames.bind({ ...commonStyles, ...appStyles });

function App() {
  return (
    <>
      <TopBar />

      <div className={cx("main-container")}>
        <ResizableDivWidth
          inputWidth="25vw"
          innerDiv={<div className={cx("left-container")}><DropMenu title={'Left Bar'} options={[]} onItemSelect={()=>{}}/></div>}
        />

        <ResizableDivWidth
          inputWidth="50vw"
          innerDiv={<div className={cx("middle-container")}><DropMenu title={'Middle Bar'} options={[]} onItemSelect={()=>{}}/></div>}
        />
        <div className={cx("right-container")}>
          <ResizableDivHeight
            inputHeight="50vh"
            innerDiv={
              <div className={cx("right-container-one")}><DropMenu title={'Right Bar'} options={[]} onItemSelect={()=>{}}/></div>
            }
          />

          <div className={cx("right-container-two")}><DropMenu title={'Right Bar'} options={[]} onItemSelect={()=>{}}/></div>
        </div>
      </div>
    </>
  );
}

export default App;
