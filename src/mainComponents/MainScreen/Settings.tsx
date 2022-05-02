import * as React from 'react'
import { DropMenu } from '../../common/bitComponents/dropDownMenu/DropMenu'
export const Settings = () => {
    const settingOptions = [
        {label: 'Logout', value: 'logout'},
        {label: 'Logout', value: 'logout'},
    ]
    return(
        <DropMenu placeholder='Settings' options={settingOptions} onItemSelect={()=>{}}/>
    )
}