import React from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import ImgCard from './ImgCard'
import CategoryBar from './CategoryBar'
import axios from 'axios'
import { baseUrl } from "../constants/axiosConstants";

const All = styled.div`
    max-width: 1024px;
    margin: 24px auto;
    padding: 0 24px;
`

const ProductsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #EEE9E9;
    align-items: center;
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
        priceInput: {
        margin: theme.spacing(1),
        width: '16ch',
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
        this.state = { 
            anchorEl: null, 
            open: false, 
            listProducts: [],
            minValue: '',
            maxValue: '',
            sortValue: ''
        };
    }

    handleClick = event => {
        this.setState({ open: true, anchorEl: event.currentTarget });
    };

    handleRequestClose = () => {
        this.setState({ open: false, anchorEl: null });
    };

    allProducts = () => {
        axios.get( baseUrl )

        .then((response) => {
            const {searchFilter, categoryFilter} = this.props
            const allProducts = response.data.products
            let filteredProducts = allProducts.filter(product => {
                return (
                    product.name.toLowerCase().indexOf(
                        searchFilter.toLowerCase()
                    ) > -1
                )
            }).filter(product => {
                return (
                    product.category.toLowerCase().indexOf(
                        categoryFilter.toLowerCase()
                    ) > -1
                )
            })

            let sortedList = [...filteredProducts]
            switch (this.state.sortValue) {
                case "name":
                    sortedList.sort((a, b) => {
                        return (
                            a.name > b.name 
                            ? 1 : 
                            a.name < b.name 
                            ? -1 : 0
                        )
                    })
                    break
                case "highest-price":
                    sortedList.sort((b, a) => {
                        return a.price - b.price
                    })
                    break
                case "lowest-price":
                    sortedList.sort((a, b) => {
                        return a.price - b.price
                    })
                    break
                default:
                    break
            }
            this.setState({listProducts: sortedList})
        })
        .catch((error) => {
            console.log(error)
        })
    }

    componentDidMount = () => {
        this.allProducts()
        this.setState({ sortValue: '' })
    }

    componentDidUpdate = () => { this.allProducts() }

    filterProductsByPrice = () => {
        const {listProducts, minValue, maxValue} = this.state
        let filteredByPrice = listProducts.filter(product => {
            return product.price > (minValue || 0)
        }).filter(product => {
            return product.price < (maxValue || Infinity)
        })
        this.setState({listProducts: filteredByPrice})
        this.handleRequestClose()
    }

    onChangeMinFilter = e => {
        const value = Number(e.target.value)
        this.setState({minValue: value})
    }

    onChangeMaxFilter = e => {
        const value = Number(e.target.value)
        this.setState({maxValue: value})
    }

    clearFilterValues = () => {
        this.setState({
            minValue: '',
            maxValue: ''
         })
    }

    clearFilter = () => {
        this.allProducts()
    }

    onChangeSort = e => {
        this.setState({sortValue: e.target.value})
    }

    render () {
        const open = this.state.anchorEl === null ? false : true;
        const id = open ? "simple-popover" : undefined;
        const { classes } = this.props;        
        
        return (
            <All>
                <CategoryBar 
                    filterInstruments={this.props.filterInstruments}
                    filterMedia={this.props.filterMedia}
                    filterCollectible={this.props.filterCollectible}
                    filterAudio={this.props.filterAudio}
                    filterSoundSystem={this.props.filterSoundSystem}
                />
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
                                horizontal: 'left',
                              }}
                        >
                            <PriceFilterContainer>
                                <PriceForm>
                                    <FormControl className={classes.priceInput} variant="outlined">
                                        <InputLabel htmlFor="min-price">De</InputLabel>
                                        <OutlinedInput
                                            id="min-price"
                                            type="number"
                                            value={this.state.minValue}
                                            onChange={this.onChangeMinFilter}
                                            startAdornment={
                                                <InputAdornment position="start">R$</InputAdornment>
                                            }
                                            labelWidth={25}
                                        />
                                    </FormControl>
                                    <FormControl className={classes.priceInput} variant="outlined">
                                        <InputLabel htmlFor="max-price">Até</InputLabel>
                                        <OutlinedInput
                                            id="max-price"
                                            type="number"
                                            value={this.state.maxValue}
                                            onChange={this.onChangeMaxFilter}
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
                                        color="primary"
                                        onClick={this.clearFilterValues}
                                    >
                                        Limpar
                                    </Button>
                                    <Button 
                                        className={classes.capitalizedButton}
                                        color="secondary"
                                        onClick={this.filterProductsByPrice}
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
                            onClick={this.clearFilter}
                        >
                            Limpar Filtros
                        </Button>
                    </Filters>
                    <div>
                        <FormControl className={classes.orderSelect} color="secondary">
                            <InputLabel id="sort-select-label">Ordenar por:</InputLabel>
                            <Select
                                labelId="sort-select-label"
                                id="sort-select"
                                autoWidth={true}
                                onChange={this.onChangeSort}
                            >
                                <MenuItem value={'name'}>Nome</MenuItem>
                                <MenuItem value={'highest-price'}>Maior Preço</MenuItem>
                                <MenuItem value={'lowest-price'}>Menor Preço</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </ProductsHeader>
                <ProductsListContainer>
                 {this.state.listProducts.map((product) => {
                    return (
                        <ImgCard 
                            key={product.id}
                            imagem={product.photos}
                            title={product.name}
                            idProduct={product.id}
                            description={product.description}
                            price={product.price}
                            openProductDetails={this.props.openProductDetails}
                        />
                    )
                })}
                    
                </ProductsListContainer>
            </All>
        );
    }
}

export default withStyles(styles)(ProductsList);
