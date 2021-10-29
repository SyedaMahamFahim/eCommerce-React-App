<tr>
{cartItems &&
  cartItems.map((item) => (
    <>
      <CartItem key={item.product} item={item} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} deleteCartItems={deleteCartItems}/>
      <td data-th="Quantity" key={item.product}>
        <div className="cart-plus-minus">
          <button
            className="qtybutton"
            onClick={() =>
              decreaseQuantity(item.product, item.quantity)
            }
          >
            -
          </button>
          <input
            type="number"
            value={item.quantity}
            readOnly
            className="cart-qty"
          />

          <button
            className="qtybutton"
            onClick={() =>
              increaseQuantity(
                item.product,
                item.quantity,
                item.stock
              )
            }
          >
            +
          </button>
        </div>
      </td>
      <td
        data-th="Subtotal"
        className="text-center"
        key={item.product}
      >
        {item.price * item.quantity}
      </td>
      <td className="actions" data-th key={item.product}>
        <button
          className="btn btn-danger btn-sm"
          key={item.product}
        >
          <BsTrash key={item.product} />
        </button>
      </td>
    </>
  ))}
</tr>