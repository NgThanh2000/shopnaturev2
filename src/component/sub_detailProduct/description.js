import React from 'react';

function Description(props){

    return(
        <div className="description grid">
            <div className="text_des">
                <p dangerouslySetInnerHTML={{ __html:props.thisProduct.description}}></p>
            </div> 
            <div className='wapper'>

            </div>
        </div>
    )
}
export default Description;