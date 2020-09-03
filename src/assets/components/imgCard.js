// Copiar e colar o código onde for utilizar.
// Atenção! Os valores expostos estão aí como guia. Alterar!

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { render, findByLabelText } from '@testing-library/react';
import styled from 'styled-components'

const Div1 = styled.div`
display:flex;
justify-content:space-evenly;
border-bottom: 1px solid #EEE9E9;`

const useStyles = makeStyles({
  root: {
    display:'flex',
    
    maxWidth: 345, //alterar valor
  },
  media: {
    height: 140, //alterar valor
  },
});

export default function MediaCard() {
  const classes = useStyles()
  
    
    return (
      <Div1>

      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1305222264" //alterar valor
          title="Tv Samsung led" //alterar valor
          />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
          Smart TV LED 43" UHD 4K Samsung 43TU7000 Crystal UHD,
          HDR, Borda Infinita, Controle Remoto Único, Bluetooth - 2020
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          A Crystal UHD é a evolução das TVs 4K da Samsung, com cores mais apuradas,
           design superior e a tela mais fina da categoria.
          </Typography>
        </CardContent>
      </CardActionArea>  
    </Card>
    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1305222264" //alterar valor
          title="Tv Samsung led" //alterar valor
          />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
          Smart TV LED 43" UHD 4K Samsung 43TU7000 Crystal UHD,
          HDR, Borda Infinita, Controle Remoto Único, Bluetooth - 2020
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          A Crystal UHD é a evolução das TVs 4K da Samsung, com cores mais apuradas,
           design superior e a tela mais fina da categoria.
          </Typography>
        </CardContent>
      </CardActionArea>  
    </Card>
    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1305222264" //alterar valor
          title="Tv Samsung led" //alterar valor
          />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
          Smart TV LED 43" UHD 4K Samsung 43TU7000 Crystal UHD,
          HDR, Borda Infinita, Controle Remoto Único, Bluetooth - 2020
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          A Crystal UHD é a evolução das TVs 4K da Samsung, com cores mais apuradas,
           design superior e a tela mais fina da categoria.
          </Typography>
        </CardContent>
      </CardActionArea>  
    </Card>
          </Div1>
  )

}
