import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useCart } from 'react-use-cart';

const Cart = () => {
  const {items,updateItemQuantity,isEmpty,removeItem, cartTotal} = useCart();
  return (
   <>
    {isEmpty ? <div className='d-flex justify-content-center align-items-center'><img  src='https://cdn.dribbble.com/users/461802/screenshots/4421003/emptycart.gif'/></div> : <>
   <h1 className='text-center my-5'>Cart</h1>
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Photo</th>
        <th>Title</th>
        <th>Price</th>
        <th>Qunatity</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item,c)=>{
          return (
            <tr>
            <td>{c+1}</td>
            <td><img width={50} src={item.image} alt={item.title} /></td>
            <td>{item.title}</td>
            <td>{item.price.toFixed()*item.quantity}$</td>
            <td><Button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</Button><span className='mx-2'>{item.quantity}</span><Button onClick={()=>{updateItemQuantity(item.id,item.quantity + 1)}}>+</Button></td>
            <td><Button  variant='danger'  onClick={() => removeItem(item.id)}>X</Button></td>
          </tr>
          )
      })}
   
     
    </tbody>
  </Table>
  <h4 className='mt-5'>Total Price:{cartTotal.toFixed()} $</h4>
   </>}
  
    
    </>
  )
}

export default Cart