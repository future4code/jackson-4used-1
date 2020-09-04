import React from 'react'
import styled from 'styled-components'
import Logotipo from '../images/4used-logo.png'
import { withStyles } from '@material-ui/core/styles'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const All = styled.div`
 background-color: #FFFCEF;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 8px 24px;
 margin: 0 auto;
 border-bottom: 1px solid #EEE9E9;
 max-width: 1024px;
 /* font-family: 'Merriweather', serif; */
`

const Logo = styled.img`
    width: 50px;
    height: 50px;   
    cursor: pointer;
`
const Container1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`
const Container2 = styled.div`
    align-self: center;
`
const SpanStyled = styled.span`
    margin: 15px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        color: #F04E3E;
    }
`

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge)

export default class Header extends React.Component {    
    render() {
        return (
            <All>
                <Container1>
                    <Logo 
                        src={Logotipo}
                        onClick={this.props.onClickHome}
                    />
                    <FormControl variant="outlined">
                        <OutlinedInput 
                            id="component-outlined" 
                            placeholder= "busca..."
                            margin="dense"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton aria-label="search" size="small">
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </Container1>
                <Container2>
                    <SpanStyled
                        onClick={this.props.onClickProducts}
                    >
                        Produtos
                    </SpanStyled>
                    <SpanStyled
                        onClick={this.props.onClickLogin}
                    >
                        Entrar
                    </SpanStyled>
                    <SpanStyled
                        onClick={this.props.onClickSell}
                    >
                        Quero vender
                    </SpanStyled>
                    <SpanStyled>
                        Fale conosco
                    </SpanStyled>
                    <IconButton aria-label="shopping cart" component="span"> {/*Se houver problemas com a cor, mudar para secondary*/}
                        <StyledBadge badgeContent={3} color="primary">
                            <ShoppingCartIcon />
                        </StyledBadge>
                    </IconButton>
                </Container2>
            </All>
        )    
    }
}