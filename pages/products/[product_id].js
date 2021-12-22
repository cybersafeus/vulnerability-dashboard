import { useState } from 'react';
const axios = require('axios');
import PrivateLayout from '../../components/PrivateLayout'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import styled from 'styled-components';
import PageHead from '../../components/PageHead';
import Box from '@mui/material/Box';
import { darken, lighten } from '@mui/material/styles';




const GridContainer = styled.div`
    width: calc(100% - 16px);
    margin: 0 8px 8px 8px;
`;

const columns = [
    {
        field: 'id',
        headerName: 'CVE_ID',
        width: 150,
        sortable: false,
        align: 'center',
        headerClassName: 'header-class'
    },
    {
        field: 'severity',
        headerName: 'Severity',
        width: 120,
        headerAlign: 'center',
        align: 'center',
        headerClassName: 'header-class'
    },
    {
        field: 'impactScore',
        headerName: 'Impact Score',
        width: 150,
        headerAlign: 'center',
        align: 'center',
        headerClassName: 'header-class'
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 800,
        headerAlign: 'center',
        renderCell: params => <div>{params.row.description}</div>,
        sortable: false,
        headerClassName: 'header-class'
    },

    {
        field: 'publishedDate',
        headerName: 'Published Date',
        type: 'number',
        width: 180,
        renderCell: params => <center>{new Date(params.row.publishedDate).toLocaleDateString("en-US")}</center>,
        editable: true,
        headerAlign: 'center',
        align: 'center',
        headerClassName: 'header-class'
    },
    {
        field: 'lastModifiedDate',
        headerName: 'Last ModifiedDate',
        description: 'This column has a value getter and is not sortable.',
        width: 180,
        renderCell: (params) => <center>{new Date(params.row.lastModifiedDate).toLocaleDateString("en-US")}</center>,
        headerAlign: 'center',
        align: 'center',
        headerClassName: 'header-class'
    },
];


const constructGridData = (vulnerabilities) => {
    if (vulnerabilities == null || vulnerabilities == undefined || vulnerabilities.length == 0) {
        return [];
    }
    return vulnerabilities.map(data => {
        const { cve, impact, publishedDate, lastModifiedDate } = data;
        return {
            id: cve.CVE_data_meta.ID,
            assigner: cve.CVE_data_meta.ASSIGNER,
            description: cve.description.description_data[0].value,
            severity: impact.baseMetricV2.severity,
            impactScore: impact.baseMetricV2.impactScore,
            publishedDate,
            lastModifiedDate
        }
    })
}
const getBackgroundColor = (color, mode) =>
    mode === 'dark' ? darken(color, 0.6) : lighten(color, 0.6);

const getHoverBackgroundColor = (color, mode) =>
    mode === 'dark' ? darken(color, 0.5) : lighten(color, 0.5);

export default function ProductDetail({ product, vulnerabilities }) {
    const [loading, setLoading] = useState(false);
    const title = product.title;

    const dataGridSX = {
        '.MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
            outline: 'none !important'
        },
        '.MuiDataGrid-columnHeaderTitle': {
            'font-weight': 'bold !important',
            'white-space': 'normal'
        },
        '.MuiSvgIcon-fontSizeSmall.MuiDataGrid-sortIcon.css-ptiqhd-MuiSvgIcon-root': {
            color: 'black !important'
        },
        '.MuiDataGrid-cell div': {
            'white-space': 'normal !important',
            'line-height': '1.5 !important',
            padding: '5px'
        },
        ".MuiDataGrid-row, .MuiDataGrid-root .MuiDataGrid-cell, .rendering-zone": {
            "max-height": "none !important",
        },
        ".MuiDataGrid-root .MuiDataGrid-window": {
            position: "relative !important",
        },
        ".MuiDataGrid-root .MuiDataGrid-viewport": {
            "max-height": "none !important",
        }, ".MuiDataGrid-root":
        {
            height: "auto !important",
        },
        '& .row': {
            color: 'black',
            fontWeight: '600',

        },
        '& .header-class': {
            backgroundColor: '#f37748',
            color: 'white',
            textTransform: 'uppercase',
            fontWeight: '600 !important'
        },
        '& .severity-CRITICAL': {
            bgcolor: (theme) =>
                getBackgroundColor(theme.palette.error.dark, theme.palette.mode),
            '&:hover': {
                cursor: 'pointer',
                bgcolor: (theme) =>
                    getHoverBackgroundColor(theme.palette.error.dark, theme.palette.mode),
            },
        },
        '& .severity-HIGH': {
            bgcolor: (theme) =>
                getBackgroundColor(theme.palette.error.main, theme.palette.mode),
            '&:hover': {
                bgcolor: (theme) =>
                    getHoverBackgroundColor(
                        theme.palette.error.main,
                        theme.palette.mode,
                    ),
            },
        },
        '& .severity-MEDIUM': {
            bgcolor: (theme) =>
                getBackgroundColor(theme.palette.warning.dark, theme.palette.mode),
            '&:hover': {
                bgcolor: (theme) =>
                    getHoverBackgroundColor(
                        theme.palette.warning.dark,
                        theme.palette.mode,
                    ),
            },
        },
        '& .severity-LOW': {
            bgcolor: (theme) =>
                getBackgroundColor(theme.palette.info.dark, theme.palette.mode),
            '&:hover': {
                bgcolor: (theme) =>
                    getHoverBackgroundColor(theme.palette.info.dark, theme.palette.mode),
            },
        },

    }
    return (
        <PrivateLayout>
            <PageHead title={title} />

            <GridContainer>
                <Box sx={{ ...dataGridSX }}>
                    <DataGrid
                        autoHeight
                        components={{
                            Toolbar: GridToolbar,
                        }}
                        rows={vulnerabilities}
                        getRowClassName={params => `row severity-${params.getValue(params.id, 'severity')}`}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        disableSelectionOnClick
                    />
                </Box>

            </GridContainer>
        </PrivateLayout>
    )
}

export async function getServerSideProps(context) {
    const { product_id } = context.query;
    const data = await fetch(`${process.env.NEXTAUTH_URL}/api/products/${product_id}`);
    const product = await data.json();

    const response = await fetch(`${process.env.NVD_HOST}/${process.env.CVE_ENDPOINT}/?apiKey=${process.env.NVD_API_KEY}&cpeMatchString=${product.cpe23Uri}`);
    const vul_data = await response.json();
    const { CVE_Items: vulnerabilities } = vul_data.result
    const gridData = constructGridData(vulnerabilities);

    return {
        props: { product, vulnerabilities: gridData }
    }
}
