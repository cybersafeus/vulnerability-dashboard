import styled from 'styled-components'

export const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: center;
    margin-top: 10px;    
`;

export const FormContainer = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
`;
export const MutedLink = styled.a`
    font-size: 12px;
    color:white;
    font-weight: 500;
    text-decoration: none;
`;
export const BoldLink = styled.a`
    font-size: 14px;
    color: rgb(0,0,0);
    font-weight: 500;
    text-decoration: none;
    text-decoration: underline;
    cursor: pointer;
`;

export const Input = styled.input`
    width: 100%;
    height: 42px;
    outline: none;
    border: 1px solid rgba(200,200,200,0.3);
    padding: 0px 10px;
    border-bottom: 1.4px solid transparent;

    &::placeholder{
        color:rgba(200,200,200,1)
    }
    &:not(:last-of-type){
        border-bottom: 1.5px solid rgba(200,200,200,0.4)
    }
    &:focus{
        outline:none;
        border-bottom: 2px solid rgb(241,106,196)
    }
`;

export const SubmitButton = styled.button`
    width : 60%;
    padding: 11px;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 100px;
    cursor: pointer;
    transition: all 240ms ease-in-out;
    background: rgb(241,196,15);
    background: linear-gradient(
        58deg, 
        rgb(56 50 23) 30%, 
        rgba(243,172,18,1) 100% );
    &:hover{
        filter: brightness(1.03);
    }
`
export const GoolgLogin = styled.div`
    cursor: pointer;
`