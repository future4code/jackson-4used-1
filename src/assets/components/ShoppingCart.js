import React from 'react';
import styled from 'styled-components' ;
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { withStyles } from '@material-ui/core/styles';

const All = styled.div`
  max-width: 1024px;
  margin: 24px auto;
  padding: 0 24px;  
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ShoppingCartList = styled.table`
  width: 80%;
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
  width: 10%;
  text-align: right;
`

export const Total = styled.h3`
  margin-top: 1.6em;
`

const styles = theme => ({
  deleteButton: {
    padding: '4px',
    '&:hover': {
      color: "#F04E3E",
      backgroundColor: "#F04E3E22",
    },
  },
});

class ShoppingCart extends React.Component {

  render() {
    let totalSum = 0;
    this.props.shoppingCart.forEach(item => {
        item && (totalSum += item.price)
    });

    const { classes } = this.props;

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
                  <IconButton 
                    className={classes.deleteButton}
                    aria-label="delete item" 
                    component="span"
                    onClick={() => this.props.deleteShoppingCartItem(item.id)}
                  >
                    <DeleteOutlinedIcon />
                  </IconButton>
                </ShoppingCartDelete>
              </ShoppingCartRow>
            )
          })}
        </table>
        {totalSum > 0 &&
        <Total>Total: R$ {totalSum}</Total>}
        <Button 
          variant="contained" 
          color="secondary"
          onClick={this.props.checkOut}
        >
          Finalizar compra
        </Button>
      </All>
    );
  }
}

export default withStyles(styles)(ShoppingCart);
