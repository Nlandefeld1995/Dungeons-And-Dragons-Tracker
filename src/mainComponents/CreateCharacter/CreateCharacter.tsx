import * as React from 'react'
import { Basics } from './Basics'
import commonStyles from "../../common/styles/common.module.css";
import classnames from "classnames/bind";
import { Button } from '../../common/bitComponents/button/Button';
const cx = classnames.bind(commonStyles);

export const CreateCharacter = () =>{
    const [step, setStep] = React.useState(0)
    const viewToShow = () => {
        switch (step) {
            case 0:
                return <Basics />
        }
    }
    return(<>
        {viewToShow()
            
        }
        <div className={cx('text-align-center', 'margin-top-lg')}>
            <Button className={cx('margin-right-md')} onClick={()=>setStep(step-1)} label='Back' />
            <Button onClick={()=>setStep(step+1)} label='Next' />
        </div>
    </>)
}