import React from 'react'
import "./shippingpage.css"
const ShippingPolicy = () => {
    return (
        <>
        <div className="shipping-content">
        <h1>Shipping Detail</h1>
        <div style={{overflowX:"auto"}}>
  <table>
    <tr>
      <th>Order	Delivery</th>
      <th> Service	</th>
      <th>Cost	</th>
      <th>Estimated Delivery Time</th>
    
    </tr>
    <tr>
      <td>Over $75</td>
      <td>Standard Ground</td>
      <td>FREE</td>
      <td>3-5 Business Days</td>
    </tr>
    <tr>
      <td>Over $75</td>
      <td>Standard Ground</td>
      <td>FREE</td>
      <td>3-5 Business Days</td>
    </tr>
    <tr>
      <td>Over $75</td>
      <td>Standard Ground</td>
      <td>FREE</td>
      <td>3-5 Business Days</td>
    </tr>
  </table>
  </div>
  <br />
  <p><strong>Standard Shipping: </strong>Orders placed before 1pm PST should be received within 3-5 business days. Orders placed on Saturdays, Sundays or public holidays are handled on the Monday or the first working day after. (Working days exclude Saturdays, Sundays and public holidays).</p>
  <br /><br />
  <p><strong>Standard Shipping: </strong>Orders placed before 1pm PST should be received within 3-5 business days. Orders placed on Saturdays, Sundays or public holidays are handled on the Monday or the first working day after. (Working days exclude Saturdays, Sundays and public holidays).</p>


<div className="shipping-img">
    <img src="https://i.pinimg.com/originals/6c/9e/19/6c9e197129299c5af04d8ad1173ad9b9.gif" alt="" />
</div>
</div>
        </>
    )
}

export default ShippingPolicy