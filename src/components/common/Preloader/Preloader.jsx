import React from 'react';
import preloader from '../../../assets/preloader/preloader.jpg'

const Preloader = (props)=>{
    return <div style={{ backgroundColor: 'black' }}>
        <img src={preloader}/>
    </div>
}
export default Preloader;