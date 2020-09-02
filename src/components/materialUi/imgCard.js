// Copiar e colar o código onde for utilizar.
// Atenção! Os valores expostos estão aí como guia. Alterar!

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345, //alterar valor
  },
  media: {
    height: 140, //alterar valor
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg" //alterar valor
          title="Contemplative Reptile" //alterar valor
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard //alterar valor
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica //alterar valor
          </Typography>
        </CardContent>
      </CardActionArea>  
    </Card>
  );
}
