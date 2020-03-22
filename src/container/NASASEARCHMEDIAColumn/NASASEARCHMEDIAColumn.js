import React from 'react'
import './NASASEARCHMEDIAColumn.css'
import {MEDIA_SEARCH_COLUMNS} from '../../constants'
import NASASEARCHitem from '../../component/NASASEARCHitem/NASASEARCHitem'
const NASASEARCHMEDIAColumn =({items, position})=>{
    return(
        <div className='media-columns' style={{height: MEDIA_SEARCH_COLUMNS}}>
                {items.map((item, index)=>{
                        if(position === 1){
                            while(index<26){
                                return  <NASASEARCHitem
                                            title={item.data[0].title}
                                            src={item.links[0].href}
                                            type={item.data[0].media_type}
                                            key={index}
                                        /> 
                            }
                            return null
                        }
                        if(position === 2){
                            while(index>26&&index<51){
                                return  <NASASEARCHitem
                                            title={item.data[0].title}
                                            src={item.links[0].href}
                                            type={item.data[0].media_type}
                                            key={index}
                                        /> 
                            }
                            return null
                        }
                        if(position === 3){
                            while(index>50&&index<76){
                                return  <NASASEARCHitem
                                            title={item.data[0].title}
                                            src={item.links[0].href}
                                            type={item.data[0].media_type}
                                            key={index}
                                        /> 
                            }
                            return null
                        }
                        if(position === 4){
                            while(index>75&&index<101){
                                return  <NASASEARCHitem
                                            title={item.data[0].title}
                                            src={item.links[0].href}
                                            type={item.data[0].media_type}
                                            key={index}
                                        /> 
                            }
                            
                        }
                        return null
                })}
        </div>
    )
}
export default NASASEARCHMEDIAColumn