import { useContext } from "react";
import { CartItem } from "./cart-item/cart-item";
import { CartList, CloseButton, EmptyMessage, ModalPopUp, ModalTitle, Overlay, TotalPrice } from "./cart-modal.style";
import { CartContext, CartState } from "../../services/cart-state";
import { CartProductItem } from "../../interfaces/cart-product-item.interface";

type CartModalProps = {
    triggerClose: () => void
};

function CartModal({triggerClose}: CartModalProps) {

    const {cartItems, setCartItems} = useContext<CartState>(CartContext);
    
    const changeCount = (id: number, difference: number) => {
        var existingProduct = cartItems.find(c => c.product.id === id);
        if (existingProduct) {
            existingProduct.count+=difference;
            setCartItems([...cartItems]);
        }
    };

    const deleteRecord = (id: number) => {
        var existingProductIndex = cartItems.findIndex(c => c.product.id === id);
        if (existingProductIndex > -1) {
            cartItems.splice(existingProductIndex, 1)
            setCartItems([...cartItems]);
        }
    };

    const totalSum = cartItems.reduce((accumulator: number, currentItem: CartProductItem) => {
        return accumulator + (currentItem.count * currentItem.product.price)
      },0);

    return (
        <>
            <Overlay/>
            <ModalPopUp>
                <ModalTitle>Your Cart</ModalTitle>
                {cartItems.length > 0 
                    ? <CartList>
                        {cartItems.map((cartItem: CartProductItem) => (
                            <CartItem key={cartItem.product.id} cartItem={cartItem} changeCount={changeCount} deleteRecord={deleteRecord}/>
                        ))}
                        <TotalPrice>
                            <span>Total Price</span>
                            <span>₦{new Intl.NumberFormat().format(totalSum)}</span>
                        </TotalPrice>
                    </CartList>
                    : <EmptyMessage>No Items in the cart</EmptyMessage>
                }
                <CloseButton onClick={() => triggerClose()}>Continue Shopping</CloseButton>
            </ModalPopUp>
        </>
        );
}

export { CartModal };