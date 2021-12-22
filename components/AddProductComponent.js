import { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useRouter } from 'next/router';
import ProductAutoComplete from './ProductAutoComplete';
const axios = require('axios')

export default function AddProductComponent({ open, handleClose }) {
    const [product, setProduct] = useState({});
    const router = useRouter();

    const setSelectedProduct = (product) => {
        setProduct(product)
    }

    const addProduct = async (product) => {
        if (product != null) {

            const res = await axios.post(`/api/products/`, product);
            console.log(res);
            router.push(router.asPath)
        }
    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="sm" >
                <DialogTitle>Add Product</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <ProductAutoComplete setSelectedProduct={setSelectedProduct} />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => { addProduct(product) }}>Add Product</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
