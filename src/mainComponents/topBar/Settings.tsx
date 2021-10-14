import * as React from 'react'
import { DropMenu } from '../../common/components/dropDownMenu/DropMenu'
export const Settings = () => {
    const settingOptions = [
        {label: 'Logout', value: 'logout'},
        {label: 'Logout', value: 'logout'},
    ]
    return(
        <DropMenu title='Settings' options={settingOptions} onItemSelect={()=>{}}/>
    )
}