import React from 'react';

function Info(props) {

    return(
        <div className='info'>
            <table className='table_list'>
                <tbody>
                    <tr>
                        <th>Weight</th>
                        <td>{props.thisProduct.weight}</td>
                    </tr>
                    <tr>
                        <th>Dimensions</th>
                        <td>                   
                            <span className="number_demension">{props.thisProduct.dimensions.length}</span>
                            <span className="number_demension">{props.thisProduct.dimensions.width}</span>
                            <span className="number_demension">{props.thisProduct.dimensions.height}</span>                       
                        </td>
                    </tr>
                    <tr>
                        <th>Brand</th>
                        <td>{props.thisProduct.brand}</td>
                    </tr>
                    <tr>
                        <th>Color</th>
                        <td>{props.thisProduct.color}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Info;