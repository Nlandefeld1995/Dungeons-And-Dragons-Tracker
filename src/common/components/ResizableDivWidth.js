import * as React from "react";
import * as commonStyles from "../styles/common.module.css";
import * as classnames from "classnames/bind";
const cx = classnames.bind(commonStyles);

export const ResizableDivWidth = ({ innerDiv, inputWidth }) => {
  const [initialPos, setInitialPos] = React.useState(null);
  const [initialSize, setInitialSize] = React.useState(null);
  const [width, setWidth] = React.useState(inputWidth)

  const initial = (e) => {
    setInitialPos(e.clientX);
    setInitialSize(e.target.parentElement.children[0].offsetWidth);
    setWidth(`${e.target.parentElement.children[0].offsetWidth}px`)
  };
  const resize = (e) => {
    let resizable = e.target.parentElement.children[0]
    resizable.style.width = (`${
      parseInt(initialSize) + parseInt(e.clientX - initialPos)
    }px`);
  };

  return (
    <div className={cx("BlockWidth")}>
      <div className={cx("ResizableWidth")}
      style={{width: `${width}`}}>{innerDiv}</div>
      <div
        className={cx("DraggableWidth")}
        draggable="true"
        onDragStart={(e)=>initial(e)}
        onDrag={(e)=>resize(e)}
      />
    </div>
  );
};
