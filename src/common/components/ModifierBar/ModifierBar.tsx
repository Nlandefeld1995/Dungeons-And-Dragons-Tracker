import React from 'react'
import classnames from "classnames/bind";
import styles from './ModifierBar.module.css'
import { Character } from '../../models';
import { ModifierItem } from './ModifierItem';


const cx = classnames.bind(styles);
const {useState, useEffect} = React
const character: Character = {
    modifiers: {
        str: {
            label: 'Strength',
            total: 15,
            id: 'str'
        }
    }
}

export const ModifierBar = () => {



    return <>{
        Object.keys(character.modifiers).map(key=><ModifierItem modifier={character.modifiers[key]} onChange={(key, newTotal)=>{}}/>)
    }</>
}