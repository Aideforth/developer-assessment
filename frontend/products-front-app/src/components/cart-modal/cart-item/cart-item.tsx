import { CartProductItem } from "../../../interfaces/cart-product-item.interface";
import { MdDelete } from "react-icons/md";
import { CartItemSection, CountButton, CountSection, InfoSection, ItemImage, ItemName, ItemPrice } from "./cart-item.style";

type cartItemProps = {
    cartItem: CartProductItem,
    changeCount: (id: number, difference: number) => void,
    deleteRecord: (id: number) => void,
};

function CartItem({cartItem, changeCount, deleteRecord}: cartItemProps) {

    return (
            <CartItemSection>
                <InfoSection>
                    <ItemImage src={cartItem.product.image}/>
                    <ItemName>{cartItem.product.name}</ItemName>
                    <ItemPrice>(₦{new Intl.NumberFormat().format(cartItem.product.price)})</ItemPrice>
                </InfoSection>
                <CountSection>
                    <CountButton onClick={() => changeCount(cartItem.product.id, -1)} disabled={cartItem.count === 1}>-</CountButton>
                    {cartItem.count}
                    <CountButton onClick={() => changeCount(cartItem.product.id, 1)}>+</CountButton>
                </CountSection>
                <ItemPrice> ₦{new Intl.NumberFormat().format(cartItem.product.price * cartItem.count)}</ItemPrice>
                <MdDelete className="delete-icon" onClick={() => deleteRecord(cartItem.product.id)}/>
            </CartItemSection>
        );
}

export { CartItem };