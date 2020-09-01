// Copiar e colar o código onde for utilizar.

import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import classes from '*.module.css';

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);

<input accept="image/*" className={classes.input} id="shopping-cart-icon" />
<label htmlFor="shopping-cart-icon">
    <IconButton color="default" aria-label="shopping cart" component="span">
        <StyledBadge badgeContent={3} color="secondary">
            <ShoppingCartIcon />
        </StyledBadge>
    </IconButton>
</label>
