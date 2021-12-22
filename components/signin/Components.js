import styled from 'styled-components'

export const Container = styled.div`
    margin-top:  2%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;`

export const BoxContainer = styled.div`
    width: 280px;
    min-height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15,15,15, 0.28);
    position: relative;
    overflow: hidden;
`

export const TopContainer = styled.div`
 width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;`

export const BackDrop = styled.div`
    width: 160%;
    height: 550px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(60deg);
    top:-290px;
    left: -70px;
    background: rgb(241,196,15);
    background: linear-gradient(
        58deg, 
        rgb(56 50 23) 30%, 
        rgba(243,172,18,1) 100% );`

export const HeaderContainer = styled.div`
width: 100%;
    display: flex;
    flex-direction: column;  
    align-items: center;
`

export const HeaderText = styled.h2`
    font-size: 20px;
    font-weight: 600;
    line-height: 1.3;
    color: white;
    z-index: 20;
    margin : 0;
`;

export const Description = styled.h5`
    color: white;
    font-weight: 500;
    font-size: 11px;
    z-index: 20;
    margin: 0;
    margin-top: 10px  ;
`;