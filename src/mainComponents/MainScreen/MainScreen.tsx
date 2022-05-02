import { DropMenu } from "../../common/bitComponents/dropDownMenu/DropMenu"
import { ResizableDivHeight } from "../../common/bitComponents/resizableComponents/ResizableDivHeight"
import { ResizableDivWidth } from "../../common/bitComponents/resizableComponents/ResizableDivWidth"
import { TopBar } from "./TopBar"
import  commonStyles from "../../common/styles/common.module.css";
import  appStyles from "../../App.module.css";
import  classnames from "classnames/bind";
const cx = classnames.bind({ ...commonStyles, ...appStyles });
export const MainScreen = () => {
    return(
        <>
      <TopBar />

      <div className={cx("main-container")}>
        <ResizableDivWidth
          inputWidth="25vw"
          innerDiv={<div className={cx("left-container")}><DropMenu placeholder={'Left Bar'} options={[]} onItemSelect={()=>{}}/></div>}
        />

        <ResizableDivWidth
          inputWidth="50vw"
          innerDiv={<div className={cx("middle-container")}><DropMenu placeholder={'Middle Bar'} options={[]} onItemSelect={()=>{}}/></div>}
        />
        <div className={cx("right-container")}>
          <ResizableDivHeight
            inputHeight="50vh"
            innerDiv={
              <div className={cx("right-container-one")}><DropMenu placeholder={'Right Bar'} options={[]} onItemSelect={()=>{}}/></div>
            }
          />

          <div className={cx("right-container-two")}><DropMenu placeholder={'Right Bar'} options={[]} onItemSelect={()=>{}}/></div>
        </div>
      </div>
    </>
    )
}