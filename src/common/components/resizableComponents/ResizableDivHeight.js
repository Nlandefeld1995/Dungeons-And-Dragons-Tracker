import * as React from "react";
import * as commonStyles from "../../styles/common.module.css";
import * as resizeStyles from "./Resizable.module.css";
import * as classnames from "classnames/bind";
const cx = classnames.bind({...commonStyles,...resizeStyles});

export const ResizableDivHeight = ({ innerDiv, inputHeight }) => {
  const [initialPos, setInitialPos] = React.useState(null);
  const [initialSize, setInitialSize] = React.useState(null);
  const [height, setHeight] = React.useState(inputHeight)

  const initial = (e) => {
    setInitialPos(e.clientY);
    setInitialSize(e.target.parentElement.children[0].offsetHeight);
    setHeight(`${e.target.parentElement.children[0].offsetHeight}px`)
  };

  const resize = (e) => {
    let resizable = e.target.parentElement.children[0]
    resizable.style.height = (`${
      parseInt(initialSize) + parseInt(e.clientY - initialPos)
    }px`);
  };

  return (
    <div className={cx("BlockHeight")}>
      <div className={cx("ResizableHeight")}
      style={{height: `${height}`}}>{innerDiv}</div>
      <div
        className={cx("DraggableHeight")}
        draggable="true"
        onDragStart={(e)=>initial(e)}
        onDrag={(e)=>resize(e)}
      />
    </div>
  );
};
