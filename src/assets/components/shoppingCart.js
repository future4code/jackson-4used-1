import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    marginRight: 6,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

class Appbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Teste
          </Typography>
          <Button
            color="inherit"
            className={classes.button}
          >
            <ShoppingCartIcon className={classes.rightIcon} />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
    );
  }
}

export default withStyles(styles)(Appbar);