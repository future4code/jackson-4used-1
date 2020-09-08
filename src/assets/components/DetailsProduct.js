import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from "axios"
import { baseUrl } from "../constants/axiosConstants";



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
const ButtonStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    width: 450px;
    justify-content: space-evenly;
    height: 150px;
    margin-right: 20px;
`
const ContainerDescription = styled.div`
    background-color: white;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.1);
    width: 450px;
    border-radius: 10px;
    text-align: left;
    margin: 10px;
    padding: 10px;

`
const ContQuestion = styled.div`
    width: 450px;
    display: flex;
    
`

export default class DetailsProduct extends React.Component {
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
    render() {

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
                    <ButtonStyled>
                        <Button variant="contained" color="secondary" disabled>
                            eu quero
                        </Button>
                        <Button 
                            variant="contained" 
                            color="secondary"
                            onClick={() => this.props.addToShoppingCart(this.state.productD)}
                        >
                            adicionar ao carrinho
                        </Button>
                        <Button variant="outlined" color="secondary" disabled>
                            fazer oferta
                        </Button>
                    </ButtonStyled>
                    <ContainerDescription>
                        <h3>Descrição:</h3>
                        <p>{this.state.productD.description}</p>
                    </ContainerDescription>
                </Container>
            </All>
                    
            
            
        )
    }


}