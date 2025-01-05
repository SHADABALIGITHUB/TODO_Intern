import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import { useLocation, useNavigate } from 'react-router-dom';
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
}) as typeof Chip; // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591



export default function CustomizedBreadcrumbs() {

    const location = useLocation();
    const navigate = useNavigate();
    const pathSegments = location.pathname.split('/').filter((segment) => segment);

    function handleClick(event: React.MouseEvent<Element, MouseEvent>) {
        event.preventDefault();
        navigate('/');
    }

    return (
        <button role="presentation" className='m-4'>
            <Breadcrumbs aria-label="breadcrumb" >
                <StyledBreadcrumb
                    label="Home"
                    icon={<HomeIcon fontSize="small" />}
                    onClick={handleClick} 
                />
                {pathSegments.map((segment) => {
                    return  <StyledBreadcrumb key={segment} label={segment} />
                })}
            </Breadcrumbs>
        </button>
    );
}
