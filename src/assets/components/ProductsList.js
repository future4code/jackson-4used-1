import React from 'react';
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import MediaCard, { CardMedia } from './imgCard';

const All = styled.div`
    max-width: 1024px;
    margin: 24px auto;
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
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1em;
`

const styles = theme => ({
    typography: {
        padding: theme.spacing(1),
    },
    campoPreco: {
        margin: theme.spacing(1),
        width: '10ch',
    },
    priceFilter: {
        backgroundColor: '#43434FCC',
    },
    capitalizedButton: {
        textTransform: 'capitalize',
    },
    orderSelect: {
        minWidth: 120,
    }
});

class ProductsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { anchorEl: null, open: false };
    }

    handleClick = event => {
        this.setState({ open: true, anchorEl: event.currentTarget });
    };

    handleRequestClose = () => {
        this.setState({ open: false, anchorEl: null });
    };

    render () {
        const open = this.state.anchorEl === null ? false : true;
        const id = open ? "simple-popover" : undefined;
        const { classes } = this.props;

        return (
            <All>
                <ProductsHeader>
                    <Filters>
                        <Button 
                            className={classes.capitalizedButton}
                            aria-describedby={id}
                            variant="outlined"
                            onClick={this.handleClick}
                            disableRipple
                        >
                            Preço
                        </Button>
                        <Popover
                            className={classes.priceFilter}
                            id={id}
                            open={this.state.open}
                            anchorEl={this.state.anchorEl}
                            onClose={this.handleRequestClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                              }}
                              transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
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
                </ProductsListContainer>
            </All>
        );
    }
}

export default withStyles(styles)(ProductsList);