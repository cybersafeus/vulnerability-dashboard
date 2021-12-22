import React from 'react'
import styled from 'styled-components'

export const LoaderDiv = styled.div`
    display: flex;
    position: center;
    top:0;
    height:100vh;   
`;
export const LoaderImage = styled.img`
    display: inline-block;
    margin:auto;
    width 200px;
`;
export default function Loader({Wrapper}) {
    return (
        <Wrapper>
        <LoaderDiv>
            <LoaderImage src='/loader_sm.svg'></LoaderImage>
        </LoaderDiv>
        </Wrapper>
    )
}
