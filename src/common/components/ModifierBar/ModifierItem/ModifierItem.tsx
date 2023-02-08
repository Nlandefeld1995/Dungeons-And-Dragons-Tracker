import React from 'react'
import classnames from "classnames/bind";
import styles from './ModiferItem.module.css'
import { Modifier } from '../../../models';

const cx = classnames.bind(styles);
const {useState, useEffect} = React

interface ModiferItemProps {
    modifier: Modifier;
    onChange: (key: string, newTotal: number)=>void
}


export const ModifierItem : React.FC<ModiferItemProps> = ({modifier,onChange}) => {



    return <>{
    }</>
}