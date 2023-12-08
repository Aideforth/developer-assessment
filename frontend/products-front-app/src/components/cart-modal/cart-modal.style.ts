import styled from "styled-components";

export const ModalPopUp = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    height: 36rem;
    width: 50rem;
    border-radius: 0.4rem;
    box-shadow: 0.15rem 0.15rem 0 #00000040;
    padding: 2rem;
    z-index: 2;
`;

export const Overlay = styled.div`
    position: fixed;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(2px);
    z-index: 1;
`;

export const ModalTitle = styled.div`
    font-size: 32px;
    font-weight: 500;
    color: #100E05;
    text-align: center;
    margin: 2rem auto 1rem;
`;

export const TotalPrice = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 22px;
    font-weight: 500;
    color: #030A10;
    padding: 0 7.6rem 0 4.3rem;
`;

export const EmptyMessage = styled.div`
    font-size: 20px;
    font-weight: 500;
    color: #100E05;
    text-align: center;
    margin: 6rem auto;
`;

export const CartList = styled.div`
    padding: 1rem 3rem;
    height: 28rem;
    overflow-y: auto;
    background-color: #F6F6F6;
`;

export const CloseButton = styled.div`
    margin-left: auto;
    font-size: 16px;
    font-weight: 600;
    color: #6D6D6D;
    margin-top: 2rem;
    border: 1px solid #AAAAAA;
    padding: 0.4rem 2rem;
    border-radius: 0.4rem;
    cursor: pointer;

    &:hover {
        color: #071017;
    }
`;