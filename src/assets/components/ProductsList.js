import React from 'react';
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import MediaCard, { CardMedia } from './imgCard';

const All = styled.div`
    margin: 24px;
    padding: 0 24px;
`

const ProductsHeader = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filters = styled.div`
    display: flex;
    gap: 1em;
`

const PriceFilterContainer = styled.div`
    padding: 18px 24px;
`

const PriceForm = styled.div`
    display: flex;
`

const FilterButtons = styled.div`
    margin-top: 1em;
    display: flex;
    justify-content: space-between;
`

const ProductsListContainer= styled.div`
    margin-top: 1.5rem;
    display: grid;
    gap: 1em;
    grid-template-columns: repeat(5, 1fr);
`

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(1),
    },
    campoPreco: {
        margin: theme.spacing(1),
        width: '10ch',
    },
    priceFilter: {
        color: '#FFFCEF',
        backgroundColor: '#43434FCC',
        border: '1px solid #43434F',
    },
    capitalizedButton: {
        textTransform: 'capitalize',
    },
    orderSelect: {
        minWidth: 120,
    }
}));

export default function ProductsList() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <All>
            <ProductsHeader>
                <Filters>
                    <Button 
                        aria-describedby={id} 
                        className={classes.capitalizedButton}
                        variant="outlined" 
                        color="textPrimary" 
                        onClick={handleClick}
                        disableRipple
                    >
                        Preço
                    </Button>
                    <Popover
                        className={classes.priceFilter}
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <PriceFilterContainer>
                            <PriceForm>
                                <FormControl className={classes.campoPreco} variant="outlined">
                                    <InputLabel htmlFor="preco-minimo">De</InputLabel>
                                    <OutlinedInput
                                        id="preco-minimo"
                                        value="50"
                                        // onChange={}
                                        startAdornment={
                                            <InputAdornment position="start">R$</InputAdornment>
                                        }
                                        labelWidth={25}
                                    />
                                </FormControl>
                                <FormControl className={classes.campoPreco} variant="outlined">
                                    <InputLabel htmlFor="preco-maximo">Até</InputLabel>
                                    <OutlinedInput
                                        id="preco-maximo"
                                        value="5000"
                                        // onChange={}
                                        startAdornment={
                                            <InputAdornment position="start">R$</InputAdornment>
                                        }
                                        labelWidth={30}
                                    />
                                </FormControl>
                            </PriceForm>
                            <FilterButtons>
                                <Button 
                                    className={classes.capitalizedButton}
                                    color="textSecundary"
                                >
                                    Limpar
                                </Button>
                                <Button 
                                    className={classes.capitalizedButton}
                                    color="secondary"
                                >
                                    Aplicar
                                </Button>
                            </FilterButtons>
                        </PriceFilterContainer>
                    </Popover>
                    <Button
                        className={classes.capitalizedButton}
                        color='primary'
                        size='small'
                    >
                        Limpar Filtros
                    </Button>
                </Filters>
                <div>
                    <FormControl className={classes.orderSelect}>
                        <InputLabel id="order-select-label">Ordenar por:</InputLabel>
                        <Select
                            labelId="order-select-label"
                            id="order-select"
                            value={'order'}
                            // onChange={handleChange}
                        >
                            <MenuItem value={'name'}>Nome</MenuItem>
                            <MenuItem value={'price'}>Preço</MenuItem>
                            <MenuItem value={'category'}>Categoria</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </ProductsHeader>
            <ProductsListContainer>
                <MediaCard />
                <MediaCard />
                <MediaCard />
                <MediaCard />
                <MediaCard />
                <MediaCard />
                <MediaCard />
                <MediaCard />
                <MediaCard />
                <MediaCard />
            </ProductsListContainer>
        </All>
    );
}