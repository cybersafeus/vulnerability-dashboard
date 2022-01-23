import { useRouter } from 'next/router'
import Grid from '@mui/material/Grid';
import styles from '../styles/ProductsComponent.module.css'
import { Badge } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styled from 'styled-components';

const ProductViewContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const VulBadge = ({ count }) => {
    return <Badge badgeContent={count} max={99} sx={{
        '& .MuiBadge-standard': {
            'border-radius': '20px',
            height: '40px',
            'min-width': '40px'
        },

        '& .MuiBadge-badge': {
            'background-color': '#ffc857',
            color: '#000',
            'font-weight': '600',
            'font-size': '1.5rem'
        }
    }}></Badge>
}

const ProductCard = ({ data, handleOnClick, openSetting }) => {
    return <Grid item xs={2} sm={4} md={4} key={data._id} >
        <div key={data._id} className={styles.card} >
            <div onClick={()=>openSetting(data)}><h2>{data.title} </h2></div>
            <ProductViewContainer> 
                <div className={styles.count} onClick={() => handleOnClick(data)}>
                    {data.vulnerabilities ? data.vulnerabilities.length : '0'}
                </div>
            </ProductViewContainer>
        </div>
    </Grid>
}


export default function ProductsComponent({ products }) {
    const router = useRouter();
    const handleOnClick = (product) => {
        const { _id: id } = product;
        router.push(`/products/${id}`);
    }
    const openSetting = (product) => {
        const { _id: id } = product;
        router.push(`/products/${id}/settings`); 
    }
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
            {
                products.map(data => {
                    return <ProductCard key = {data._id} data={data} handleOnClick={handleOnClick} openSetting = {openSetting} />
                })
            }
        </Grid >
    )
}

