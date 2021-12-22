import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import PrivateLayout from '../../components/PrivateLayout'
import ProductsComponent from '../../components/ProductsComponent';
import PageHead from '../../components/PageHead'
import styled from 'styled-components'
import AddProductComponent from '../../components/AddProductComponent'
import { Tooltip } from '@material-ui/core';

const FloatingButton = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    position:fixed;
	width:60px;
	height:60px;
	top:80%;
	right:5%;
	background-color:#f37748;
	color:#FFF;
	border-radius:50px;
	text-align:center;
	box-shadow: 2px 2px 3px #999;
    cursor:pointer;
`;

export default function Products({ products }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const title = "Products > List";
    return (
        <PrivateLayout>
            <PageHead title={title} />
            <ProductsComponent products={products} />
            <Tooltip title="Add Product">
                <FloatingButton onClick={handleOpen}>
                    <AddIcon sx={{ fontSize: 40, color: "#212227" }} />
                </FloatingButton>
            </Tooltip>
            <AddProductComponent open={open} handleOpen={handleOpen} handleClose={handleClose} />
        </PrivateLayout>
    )
}

export async function getServerSideProps(context) {
    const data = await fetch(`${process.env.NEXTAUTH_URL}/api/products`);
    const { data: products } = await data.json();

    return {
        props: { products }
    }
}