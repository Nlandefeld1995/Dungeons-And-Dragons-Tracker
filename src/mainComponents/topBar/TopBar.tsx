import * as React from 'react';
import { Settings } from './Settings';
import  commonStyles from "../../common/styles/common.module.css";
import  classnames from 'classnames/bind'
const cx = classnames.bind({...commonStyles});

export const TopBar = () => {


  return (
    <div className={cx("top-bar-div", 'margin-left-lg', 'margin-top-md')}>
      <Settings/>
      <div>PlayerInfo</div>
      <div>View Select</div>
      <div>QuickLinks</div>
    </div>
  );
};
