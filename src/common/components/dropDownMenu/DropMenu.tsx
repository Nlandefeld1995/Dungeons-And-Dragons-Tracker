// import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import * as React from "react";
import styles from "./DropMenu.module.css";
import classnames from "classnames/bind";
const cx = classnames.bind(styles);

interface DropMenuProps {
  options: { label: string; value: string }[];
  title: string;
  onItemSelect: ({}) => void;
}

export const DropMenu: React.FC<DropMenuProps> = ({
  options,
  title, 
  onItemSelect
}) => {
  const [showMenu, setShowMenu] = React.useState(false)
  const [menuDirection, setMenuDirection] = React.useState('right')

  React.useEffect(()=>{
    if(showMenu){
      setMenuDirection('down')
    } else {
      setMenuDirection('right')
    }
  },[showMenu])
  
  return (<div className={cx('select-box')}>
    <div className={cx('select-box-toggle')}
    onClick={()=>{setShowMenu(!showMenu)}}>
      <div className={cx('select-box-toggle-text')}>
      {title} <p><i className={cx("arrow", `${menuDirection}`)}></i></p>
      </div>
    </div>
    {showMenu &&
    <div className={cx('drop-menu')}>
      {options.map(opt=>{return <div className={cx('drop-menu-item')} onClick={()=>{onItemSelect(opt); setShowMenu(false)}}>{opt.label}</div>})}
    </div>
    }
    </div>
  );
};
