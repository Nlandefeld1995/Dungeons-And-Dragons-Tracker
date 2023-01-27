import React from 'react'
import classnames from "classnames/bind";
import styles from './DungeonsDragonsTracker.module.css'

const cx = classnames.bind(styles);
const {useState, useEffect} = React

export const DungeonsDragonsTracker = () => {



    return <div className={cx('trackerMain')}>
        <div className={cx('headerBar')}>Header</div>
        <div className={cx('mainBody')}></div>


    </div>
}