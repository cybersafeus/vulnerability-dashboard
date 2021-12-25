import { useState } from 'react'
import ProductSuggestions from './ProductSuggestions'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

import styled from 'styled-components'
const Input = styled.input`
    border: 1px solid #f37748;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 0.5rem;
    width: 500px;
    &:not(:last-of-type){
        border-bottom: 1.5px solid rgba(200,200,200,0.4)
    }
    &:focus{
        outline:none;
        border: 1px solid #f37788;
    }`

const constructProducts = (data) => {
    const { cpes } = data.result;
    if (cpes != null && cpes.length > 0) {
        const products = cpes.map(data => {
            return {
                title: data.titles[0].title,
                cpe23Uri: data.cpe23Uri,
                vulnerabilities: data.vulnerabilities
            }
        })
        return products;
    }
}

export default function ProductAutoComplete({ setSelectedProduct }) {
    const [loading, setLoading] = useState(false)
    const [canAddProduct, setCanAddProduct] = useState(false)
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const [selectedSuggestion, setSelectedSuggestion] = useState({})
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [input, setInput] = useState("");

    const onChange = async (e) => {
        setCanAddProduct(false)
        const searchText = e.target.value;
        setInput(searchText);
    };

    const onSearch = async () => {
        setLoading(true);
        const res = await fetch(`${process.env.NVD_HOST}/${process.env.CPE_ENDPOINT}/?apiKey=${process.env.NVD_API_KEY}&addOns=cves&keyword=${input}`);
        const data = await res.json();
        setLoading(false);
        const products = constructProducts(data);
        setShowSuggestions(true);
        setFilteredSuggestions(products);
        setActiveSuggestionIndex(0)
    }
    const onClick = (suggestion) => {
        setCanAddProduct(true)
        setFilteredSuggestions([]);
        setSelectedSuggestion(suggestion);
        setSelectedProduct(suggestion);
        setInput(suggestion.title);
        setShowSuggestions(false);
    };
    return (
        <div>
            <InputBase
                onChange={onChange}
                value={input}
                color='secondary'
                sx={{ fontWeight: '600', 
                    fontSize: '1.2rem', 
                    flex: 1, 
                    border: 2, borderColor: 'secondary.main', paddingLeft: '10px', width: '500px' }}
                placeholder="Search Products"
                inputProps={{ 'aria-label': 'Search Products' }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon onClick={onSearch} />
            </IconButton>
            {showSuggestions && input
                && <ProductSuggestions
                    onClick={onClick}
                    filteredSuggestions={filteredSuggestions}
                    activeSuggestionIndex={activeSuggestionIndex}
                />}
        </div>
    )
}
