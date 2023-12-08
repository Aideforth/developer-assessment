import styled from "styled-components";

export const ProductCardContainer = styled.div`
    display: flex;
    margin: 2rem 2rem;
    background-color: #F1F1F1;
    height: 10rem;
    padding: 1rem;
`;

export const ProductImage = styled.img`
    width: 8rem;
    height: 8rem;
    border-radius: 0.4rem;
    object-fit: cover;
`;

export const ProductInfo = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const LeftSide = styled.div`
    margin: 1rem 1rem; 
    
`;

export const RightSide = styled.div`
    margin: 1rem 1rem; 
    min-width: 10rem;
    text-align: right;
`;

export const Name = styled.div`
    font-size: 24px;
    font-weight: 500;
    color: #100E05;
`;

export const Description = styled.div`
    font-size: 18px;
    color: #202020;
`;

export const Price = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: #202020;
`;

export const SKU = styled.div`
    font-size: 16px;
    color: #202020;
`;

export const Button = styled.button`
    font-size: 16px;
    font-weight: 600;
    color: #6D6D6D;
    margin-top: 2rem;
    background-color: #FFFFFF;
    padding: 0.8rem 2rem;
    border-radius: 0.4rem;
    border: 0;
    cursor: pointer;

    &:hover {
        color: #071017;
    }
`;