import { Button } from "../../common/bitComponents/button/Button"
import { Input } from "../../common/bitComponents/input/Input"
import { ACTIONS } from "../../common/redux/globalStore"
import { useAction } from "../../common/redux/reduxHooks"
import commonStyles from "../../common/styles/common.module.css";
import classnames from "classnames/bind";
const cx = classnames.bind(commonStyles);

export const CreateAccount = () => {
    const setView = useAction(ACTIONS.UPDATE_VIEW)
    return(
        <div className={cx('text-align-center', 'block')}>
        <div>UserName:</div>
        <Input placeholder='User Name:'/>
        <div>Password:</div>
        <Input placeholder='Password:'/>
        <div className={cx('margin-top-sm')}>
        <Button className={cx('margin-right-sm')}  onClick={()=>{setView('home')}} label="Cancel"/>
        <Button  onClick={()=>{setView('createCharacter')}} label="Login"/>
        </div>
        </div>
    )
}