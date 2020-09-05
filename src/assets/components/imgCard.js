// Copiar e colar o código onde for utilizar.
// Atenção! Os valores expostos estão aí como guia. Alterar!

import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import axios from "axios"
import { baseUrl } from "../constants/axiosConstants";
import styled from 'styled-components'
import DetailsProduct from './DetailsProduct'

const Div1 = styled.div`
display:flex;
justify-content:space-evenly;
border-bottom: 1px solid #EEE9E9;`

const styles = theme => ({
  root: {
    display:'flex',
    minWidth: 240,
    maxWidth: 320, //alterar valor
  },
  media: {
    height: 240, //alterar valor
  },
});

class ImgCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {detail: false, page: true, }
  }

  MediaCard = (props) => {
  const classes = styles()
  }
  
  onClickCard = () => {
    this.setState({
      detail: !this.state.detail,
      page: !true
    })
  }
    
    render() {
      const { classes } = this.props;

      const detailPage = (id) => {
        if(this.state.detail) {
          return <DetailsProduct idProduct={id} />
        }
        if(this.state.page){
          return (
            <Div1>
  
        <Card className={classes.root}>
        <CardActionArea >
          <CardMedia
            onClick={() => this.onClickCard(this.props.idProduct)}
            className={classes.media}
            image={this.props.imagem} //alterar valor
            title={this.props.title} //alterar valor
            />
          <CardContent >
            <Typography gutterBottom variant="h6" component="h2">
              {this.props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {this.props.description}
  
            </Typography>
            <Typography variant="body2" color="primary" component="p">
            R${this.props.price}
          
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      
        </Div1>
          )
        }
      }
      return (
        <div>
        {detailPage(this.props.idProduct)}
        </div>
    )
    }

}

export default withStyles(styles)( ImgCard )
