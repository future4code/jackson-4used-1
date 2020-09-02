import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



const Img = styled.img`
    width: 500px;
    height: 650px;
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
    height: 450px;
    border-radius: 10px;
    text-align: center;
    margin: 10px;

`
const ContQuestion = styled.div`
    width: 450px;
    display: flex;
    
`
export default class DetailsProduct extends React.Component {
    render() {
        return (
            <All>
                <ContainerImg>
                    <Img src="https://cdn.iset.io/assets/54224/produtos/1192/6596094841-microfone-condensador-vocal-shure-pga48lc-dinamico-cardioide-1.jpg" />
                    <ContQuestion>
                        <TextField id="outlined-basic" label="Pergunte ao vendedor" variant="outlined" />
                        <Button variant="outlined" color="secondary">
                            perguntar
                        </Button>
                    </ContQuestion>
                </ContainerImg>
                <Container>
                    <h2>Microfone com fio</h2>
                    <PriceStyled>R$ 89,90</PriceStyled>
                    <p>2x de R$:44,95 s/ Juros</p>
                    <ButtonStyled>
                        <Button variant="contained" color="secondary">
                            eu quero
                        </Button>
                        <Button variant="outlined" color="secondary">
                            adicionar ao carrinho
                        </Button>
                        <Button variant="outlined" color="secondary">
                             fazer oferta
                        </Button>
                    </ButtonStyled>
                    <ContainerDescription>
                        <p>Descrição</p>
                    </ContainerDescription>
                    
                </Container>
            </All>
        )
    }


}