import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from "axios"
import { baseUrl } from "../constants/axiosConstants";
import { withStyles } from '@material-ui/core/styles';

const Img = styled.img`
    width: 500px;
    border: 1px hidden;
    margin-bottom: 50px;
    margin-right: 50px;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.2);
    
`
const All = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2em;
`
const ContainerImg = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 80px;
` 
const Container = styled.div `
    margin-top: 70px;
`
const PriceStyled = styled.p`
    color: #F04E3E;
    font-size: 28px;
`
const ContainerDescription = styled.div`
    background-color: white;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.1);
    width: 450px;
    border-radius: 10px;
    text-align: left;
    padding: 8px 16px;

    h3 {
        margin: 0 0 1em 0;
    }

    p {
        margin: 0 0 0.8em 0;
    }
`
const ContQuestion = styled.div`
    width: 450px;
    display: flex;
    gap: 0.8em;
`

const styles = {
    addButton: {
        color: '#FFFCEF',
        fontWeight: 600,
        marginBottom: '1.6em',
        width: '100%'
    },
    deleteButton: {
        marginTop: '1.6em',
        width: '100%'
    }
}

class DetailsProduct extends React.Component {
    state = {
        productD: {}
    }

    productsDetail = (id) => {
        axios.get( `${baseUrl}/${id}` )
    
        .then((response) => {
            this.setState({
                productD: {...response.data}
            })
            // console.log(this.state.productD)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    componentDidMount = (props) => {
        this.productsDetail(this.props.idProduct)
    }

    deleteProduct = (id) => {
        axios.delete( `${baseUrl}/${id}` )
        .then(response => {
            alert(`Anúncio removido`)
            this.props.goToHomePage()
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {

        const { classes } = this.props;  

        const seller = (this.state.productD.sellerFirstName || 'Curadoria' )
            + ' ' 
            + (this.state.productD.sellerLastName || '4USED')



        return (
            <All>
                <ContainerImg>
                    <Img src={this.state.productD.photos} />
                    <ContQuestion>
                        <TextField id="outlined-basic" label="Pergunte ao vendedor" variant="outlined" />
                        <Button variant="outlined" color="secondary">
                            perguntar
                        </Button>
                    </ContQuestion>
                </ContainerImg>
                <Container>
                    <h2>{this.state.productD.name}</h2>
                    <PriceStyled>R$ {this.state.productD.price}</PriceStyled>
                    <p>{this.state.productD.installments}x sem Juros</p>
                    <h3>Vendedor(a):</h3>
                    <h4>{ seller }</h4>
                    <Button 
                        className={classes.addButton}
                        variant="contained" 
                        color="secondary"
                        onClick={() => this.props.addToShoppingCart(this.state.productD)}
                    >
                        adicionar ao carrinho
                    </Button>
                    <ContainerDescription>
                        <h3>Descrição:</h3>
                        <p>{this.state.productD.description}</p>
                    </ContainerDescription>
                    <Button 
                        className={classes.deleteButton}
                        variant="outlined" 
                        color="primary" 
                        onClick={() => this.deleteProduct(this.props.idProduct)}
                    >
                        deletar anúncio
                    </Button>
                </Container>
            </All>
        )
    }
}

export default withStyles(styles)(DetailsProduct);