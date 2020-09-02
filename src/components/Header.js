import React from 'react'
import styled from 'styled-components'
import Logotipo from '../2.png'
import Input from '@material-ui/core/Input';
import Badge from '@material-ui/core/Badge';


const All = styled.div`
 background-color: #FFFCEF;
 display: flex;
 justify-content: space-around;
 border-bottom: 1px solid #EEE9E9;
 font-family: 'Merriweather', serif;
`
const Logo = styled.img`
    width: 50px;
    height: 50px;
    margin-left: 150px;
    margin-right: 15px;
    
`
const Container1 = styled.div`
    display: flex;
    margin-top: 5px;
    justify-content: center;
    align-items: center;
    margin-left: 50px;
    
`
const Container2 = styled.div`
    margin-right: 200px;
    align-self: center;
    
`
const SpanStyled = styled.span`
    margin: 15px;
    &:hover {
        color: #F04E3E;
    }
`
const InputPersonalizade = styled.input`
  border: none;
  width: ${props => props.width};
  height: 30px;
  outline: none;
  margin: 10px 2px 10px 3px;
  border-radius: 5px;
  width: 200px;
  align-self: center;
  border-bottom: 2px solid black;
  background-color: #FFFCEF;
  
  `

export default class Header extends React.Component {

    
    render() {
        return (
            <All>
                <Container1>
                    <Logo src={Logotipo} />
                    <InputPersonalizade placeholder="Buscar.." />
                </Container1>
                <Container2>
                    <SpanStyled>Produtos</SpanStyled>
                    <SpanStyled>Entrar</SpanStyled>
                    <SpanStyled>Quero vender</SpanStyled>
                    <SpanStyled>Fale conosco</SpanStyled>
                    <SpanStyled>Carrinho</SpanStyled>
                </Container2>
            </All>
         
        )
         
    
        
    }
}