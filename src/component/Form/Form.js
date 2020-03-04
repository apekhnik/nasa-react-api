import React from 'react'
import './Form.css'
import Button from '../Button/Button'
import Input from '../Input/Input'
const ControlForm =({inputType,inputValue,inputOnchange,onClickPrev,onClickNext,onClickLoad})=>{
    return(
        <div className='form-container'>
            <div className='form-container__item '>
                <Button text='←' onClick={onClickPrev} className='procent-height'/>
            </div>
            <div className='form-container__item '>
                <Input type={inputType} value={inputValue} onChange={inputOnchange} className='block'/>
                <Button text='LOAD' onClick={onClickLoad} className='procent100-width'/>
            </div>  
            <div className='form-container__item '>
                <Button text='→' onClick={onClickNext} className='procent-height'/>
            </div>       
        </div>
    )
}
export default ControlForm