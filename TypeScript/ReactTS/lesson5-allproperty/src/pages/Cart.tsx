import React from 'react'
import { useCart } from 'react-use-cart'

const Cart = () => {
    const {items} = useCart();
  return (
    <div className='cart'>
        {items.map((item:any)=>(
            <li>
                <img width={100} className='mt-3' src={item.images} alt="" />
                {item.title}</li>
        ))}
    </div>
  )
}

export default Cart