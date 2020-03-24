import React from 'react'
import ContainerItem from '../../component/Container/ContainerItem'
import APOD from '../nasaData/APOD'
 const APODColumn = ({items, onClick}) => {
    return(
        <ContainerItem>
            {items.next.map((item)=>{
                        return <APOD
                        date={item.toString()}
                        size='min'
                        onClick={()=>onClick((item.toString()))}
                        />})}
        </ContainerItem>
    )
 }
export default APODColumn