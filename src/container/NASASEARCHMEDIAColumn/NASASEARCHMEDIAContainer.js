import React from 'react'
import NASAMEDIASEARCHColumn from './NASASEARCHMEDIAColumn'
const NASASEARCHMEDIAContainer =({searchResult})=>{
    return(
        <div className='media-search__container'>
            <NASAMEDIASEARCHColumn
                items={searchResult}
                position={1}
            />
            <NASAMEDIASEARCHColumn
                items={searchResult}
                position={2}
            />
            <NASAMEDIASEARCHColumn
                items={searchResult}
                position={3}
            />
            <NASAMEDIASEARCHColumn
                items={searchResult}
                position={4}
            />
        </div>
    )
}
export default NASASEARCHMEDIAContainer