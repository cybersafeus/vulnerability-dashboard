
import styled from 'styled-components'
export const Head = styled.div`
    display: flex;
    color: #ffc857;
    margin: 0 8px 8px 8px;
    font-size: 1.5rem;
    padding: 10px;
    background-color:#468c98;
    border-radius: 12px 0;
    width: calc(100% - 16px);
    justify-content: space-between;
    font-weight:600;
`;

export default function PageHead({title, AddProduct }) {
    return (
        <Head>
            {title}
        </Head>
    )
}
