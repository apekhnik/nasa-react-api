import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
const ControlForm =({inputType,inputValue,inputOnchange,onClickPrev,onClickNext,onClickLoad})=>{
    return(
        <div>
            <Button text='PREV' onClick={onClickPrev}/>
            <Input type={inputType} value={inputValue} onChange={inputOnchange}/>
            <Button text='LOAD' onClick={onClickLoad}/>
            <Button text='NEXT' onClick={onClickNext}/>
        </div>
    )
}
export default ControlForm