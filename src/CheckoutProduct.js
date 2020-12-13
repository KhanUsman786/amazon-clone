import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';
function CheckoutProduct({id,image,title,price,rating,hideButton}) {
    const [{basket},dispatch] = useStateValue();
         const removeFromBasket =()=>{
             //remove the item
             dispatch({
                 type:'REMOVE_FROM_BASKET',
                 id:id,
             })

         }



    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_img' src={image}
            />
            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>
                <p className='checkoutProduct_price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutproduct_rating'>
               {Array(rating).fill()
                .map((_, i)=>{
                   return <p>🌟</p>
                })}
               
               
               </div>
               {!hideButton && (
                <button onClick={removeFromBasket}>Remove from Basket</button>
               )}
               
            </div>
        </div>
    )
}

export default CheckoutProduct
