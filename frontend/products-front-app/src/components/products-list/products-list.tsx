import { useState, useContext } from "react";
import { Product } from "../../interfaces/product.interface";
import { GET_PRODUCTS } from "../../services/graphql-queries";
import { CartModal } from "../cart-modal/cart-modal";
import { ProductCard } from "../product-card/product-card";
import { ProductsListContainer, Title } from "./products-list.style";
import { useQuery } from "@apollo/client";
import { CartContext, CartState } from "../../services/cart-state";
import { EmptyMessage } from "../cart-modal/cart-modal.style";

function ProductsList() {
    const { loading, error, data } = useQuery(GET_PRODUCTS);
    const [showCart, setShowCart] = useState(false);
    const {cartItems, setCartItems} = useContext<CartState>(CartContext);

    if (error) return <p>Error : {error.message}</p>;

    const addToCartAction = (product: Product) => {
        setShowCart(true);
        var existingProduct = cartItems.find(c => c.product.id === product.id);
        if (existingProduct) {
            existingProduct.count++;
        }
        else {
            cartItems.push({
                product: product,
                count: 1
            });
        }
        setCartItems([...cartItems]);
    };

    return (
        <>
            <Title>Welcome to the Product Store</Title>
            <ProductsListContainer>
                {loading
                ? <EmptyMessage>'loading...'</EmptyMessage>
                :  data.allProducts.length > 0
                    ? data.allProducts?.map((c: Product) => (
                        <ProductCard key={c.id} product={c} addToCart={addToCartAction}/>
                    ))
                    : <EmptyMessage>No products set up yet.</EmptyMessage>}
            </ProductsListContainer>
            {showCart && <CartModal triggerClose={() => setShowCart(false)}/>}
        </>
        );
}

export {ProductsList};