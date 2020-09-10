import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

const All = styled.div`
    text-align: center;
    height: 75vh;
    margin-top: 80px;
`   

const InputPersonalizade = styled.input`
  background-color: white;
  box-shadow: 5px 5px 5px rgba(0,0,0,0.2);
  border: none;
  width: ${props => props.width};
  height: 40px;
  outline: none;
  margin: 5px 2px 10px 3px;
  border-radius: 5px;
  width: 220px;
  align-self: center;
  @media(max-width: 380px){
       width: 180px;
    }
    
`
const Tit = styled.h3`
    margin-bottom: 70px;
`
export default class LoginPage extends React.Component {
    render() {
        return (
            <All>
                <Tit>Venda ou compre de gente boa :) !</Tit>
                <h4>Email</h4>
                <InputPersonalizade />
                <h4>Passoword</h4>
                <InputPersonalizade />
                <div>
                    <Button variant="contained" color="secondary">
                            entrar
                        </Button>
                </div>
            </All>
        )
    }
}