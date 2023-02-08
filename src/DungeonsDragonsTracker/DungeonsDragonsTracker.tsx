import React from 'react'
import classnames from "classnames/bind";
import styles from './DungeonsDragonsTracker.module.css'
import { Inspiration } from '../common/components/Inspiration';

const cx = classnames.bind(styles);
const {useState, useEffect} = React

export const DungeonsDragonsTracker = () => {



    return <div className={cx('trackerMain')}>
        <div className={cx('headerBar')}><div>Menu</div><div>character/player info </div><div> save button</div></div>
        <div className={cx('mainBody')}>
            <div><div>ability scores</div><Inspiration /><div>hit points</div></div>
            <div>
                <div>SavingThrows</div>
                <div>Senses</div>
                <div>Proficencies & language</div>
            </div>
            <div>Skills</div>
            <div>
                <div><div>Initiative</div><div>Armor class</div><div>Defenses / conditions</div></div>
                <div>ActionTable TBD</div>
            </div>
        </div>


    </div>
}