import React from "react";
import styled from "styled-components"
import Carousel from 'react-elastic-carousel'
import ImgCard, { CardMedia } from './ImgCard'
import axios from "axios"
import { baseUrl } from "../constants/axiosConstants";

const ContainerHome = styled.div`
    max-width: 1024px;
    margin: 24px auto;
    padding: 0 24px;
`

const SlideShow = styled.div`
    margin: 2.5em 5em;
    padding: 2vw;
    background-color: #43ADA5;
`

const ProductsListContainer= styled.div`
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1em;
`

// Provavelmente terá o Carrossel alterado

export default class DetailsProduct extends React.Component {
    state = {
        listProductHome: [],
    }
    allProducts = () => {
        axios.get( baseUrl )

        .then((response) => {
            this.setState({
                listProductHome: response.data.products
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
    componentDidMount = () => {
        this.allProducts()
    }
    render (){
        return (
            <ContainerHome> 
                <SlideShow>
                    <Carousel itemsToShow={1} enableAutoPlay>
                        <p>Imagem 1</p>
                        <p>Imagem 2</p>
                        <p>Imagem 3</p>
                    </Carousel>
                </SlideShow>
                <ProductsListContainer>
                {this.state.listProductHome.map((product) => {
                    return (
                        <ImgCard 
                            key={product.id}
                            imagem={product.photos}
                            title={product.name}
                            idProduct={product.id}
                            description={product.description}
                            price={product.price}
                        />
                    )
                })}
                    
                </ProductsListContainer>
            </ContainerHome>
       );
    }
}
