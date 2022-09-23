import React from 'react';
import a from '../acsses/img/twitter.png';
import b from '../acsses/img/fb.png';
import c from '../acsses/img/vimeo.png';
import d from '../acsses/img/in.png';
import e from '../acsses/img/youtube.png';
import g from '../acsses/img/pin.png';
function SocialIcon(){
    return(
        <div className='socialicon'>
            <img src={a} alt='twitter'/>
            <img src={b} alt='fb'/>
            <img src={c} alt='vimeo'/>
            <img src={d} alt='in'/>
            <img src={e} alt='youtube'/>
            <img src={g} alt='pin'/>
        </div>
    )
}
export default SocialIcon;