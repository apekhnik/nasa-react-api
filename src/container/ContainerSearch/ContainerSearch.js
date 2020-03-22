import React from 'react'
import Button from '../../component/Button/Button'
import Checkbox from '../../component/Checkbox/Checkbox'
const ContainerSearch = ({placeholder,inputOnChange, btnOnClick,
                         onChangeImage, onChangeVideo, onChangeAudio,
                         mediaType_imageChecked,mediaType_videoChecked,mediaType_audioChecked}) =>{
    return(
        <div className='nasa-image-search'>
            <input type='text' onChange={inputOnChange} placeholder={placeholder}/>
            <Button text='SEARCH' onClick={btnOnClick}/>
            <div className='checkbox-container'>
                <Checkbox label='image' onChange={onChangeImage} checked={mediaType_imageChecked}/>
                <Checkbox label='video' onChange={onChangeVideo} checked={mediaType_videoChecked}/>
                <Checkbox label='audio' onChange={onChangeAudio} checked={mediaType_audioChecked} disabled/>
            </div>
        </div>
    )
}
export default ContainerSearch