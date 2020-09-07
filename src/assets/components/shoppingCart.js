import React from 'react';
import styled from 'styled-components' ;
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const All = styled.div`
  max-width: 1024px;
  margin: 24px auto;
  padding: 0 24px;  
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ShoppingCartList = styled.table`
  width: 50%;
`

export const ShoppingCartTitle = styled.caption`
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 0.8em;
`

export const ShoppingCartRow = styled.tr`
  border-bottom: 1px dashed black;
  padding: 1em 0.8em;
`

export const ShoppingCartItem = styled.td`
  border-bottom: 1px dashed black;
  padding: 1em 0.8em;
  width: 70%;
`

export const ShoppingCartPrice = styled.td`
  border-bottom: 1px dashed black;
  padding: 1em 0.8em;
  width: 20%;
`

export const ShoppingCartDelete = styled.td`
  border-bottom: 1px dashed black;
  padding: 1em 0.8em;
  width: 10%;
`

export const Total = styled.h3`
  margin-top: 1.6em;
`

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let totalSum = 0;
    this.props.shoppingCart.forEach(item => {
        item && (totalSum += item.price)
    });

    return (
      <All>
        <table>
          <ShoppingCartTitle colspan="3">Carrinho:</ShoppingCartTitle>
          {this.props.shoppingCart.map(item => {
            return (
              <ShoppingCartRow>
                <ShoppingCartItem>{item.name}</ShoppingCartItem>
                <ShoppingCartPrice>R$ {item.price}</ShoppingCartPrice>
                <ShoppingCartDelete>
                  <DeleteOutlinedIcon 
                    onClick={() => this.props.deleteShoppingCartItem(item.id)}
                  />
                </ShoppingCartDelete>
              </ShoppingCartRow>
            )
          })}
        </table>
        {totalSum > 0 &&
        <Total>Total: R$ {totalSum}</Total>}
        <Button variant="contained" color="secondary">
          Finalizar compra
        </Button>
      </All>
    );
  }
}

export default ShoppingCart;