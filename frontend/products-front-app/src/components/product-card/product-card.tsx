import { Product } from "../../interfaces/product.interface";
import { Button, Description, LeftSide, Name, Price, ProductCardContainer, ProductImage, ProductInfo, RightSide, SKU } from "./product-card.style";

type ProductCardProps = {
    product: Product,
    addToCart: (product: Product) => void
};

function ProductCard({product, addToCart}: ProductCardProps) {

    return (
        <ProductCardContainer>
            <ProductImage src={product.image}/>
            <ProductInfo>
                <LeftSide>
                    <Name>{product.name}</Name>
                    <Description>{product.description}</Description>
                </LeftSide>
                <RightSide>
                    <Price>₦{new Intl.NumberFormat().format(product.price)}</Price>
                    <SKU>{product.sku}</SKU>
                    <Button onClick={() => addToCart(product)}>Add To Cart</Button>
                </RightSide>
            </ProductInfo>
        </ProductCardContainer>
        );
}

export {ProductCard};