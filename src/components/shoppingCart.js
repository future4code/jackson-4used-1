// Copiar e colar o código onde for utilizar.

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import classes from '*.module.css';

<input accept="image/*" className={classes.input} id="shopping-cart-icon" />
<label htmlFor="shopping-cart-icon">
    <IconButton color="default" aria-label="shopping cart" component="span">
        <ShoppingCartIcon />
    </IconButton>
</label>
