import styled from "styled-components";

export const CartItemSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    margin: 1rem 0;

    .delete-icon {
        font-size: 24px;
        cursor: pointer;
        &:hover {
            font-size: 26px;
        }
    }
`;

export const ItemName = styled.div`
    font-size: 20px;
    font-weight: 500;
    color: #100E05;
    text-align: center;
`;

export const ItemPrice = styled.div`
    font-size: 20px;
    font-weight: 500;
    color: #100E05;
    text-align: center;
    width: 3rem;
`;

export const CountSection = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    color: #100E05;
    text-align: center;
`;

export const CountButton = styled.button`
    margin: 0 0.4rem;
    font-size: 16px;
    font-weight: 600;
    color: #6D6D6D;
    border: 1px solid #AAAAAA;
    padding: 0.2rem 0.4rem;
    border-radius: 0.4rem;
    cursor: pointer;

    &:hover {
        color: #071017;
    }
`;

export const ItemImage = styled.img`
    width: 4rem;
    height: 4rem;
`;

export const InfoSection = styled.div`
    display: flex;
    gap: 0.4rem;
    align-items: center;
    width: 12rem;
`;