import React from 'react';
import { connect } from 'react-redux';  
import { useEffect } from 'react';
import { actGetNewProduct } from '../actions/actions';

function NewProduct(props){
    console.log(props.products)

    useEffect(() =>{
        props.dispatchProduct();
        // props.dispatchNewProduct();
    }, []);
    return(
        <div className='newProduct'>
            <div className='in_newProduct'>
                {props.products.map((product,i)=>(
                    <div key={i} className='product-item'>
                        <img src={product.images.map((img,i)=>(
                            img.src
                        ))} alt={product.slug}/>
                        <h4>{product.rating_count}</h4>
                        <h3>{product.name}</h3>
                        <p>{product.price} $</p>
                        <button>ADD TO CART</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

const mapDispatchToProps =(dispatch)=>{
    return{
        dispatchProduct : (data)=>{
            dispatch(actGetNewProduct(data))
        }
    }
}
const mapStateToProps =(state) =>{
    return{
        products: state.newFinishCallProduct
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);