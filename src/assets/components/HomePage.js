import React from "react";
import styled from "styled-components"
import axios from "axios"
import Carousel from 'react-elastic-carousel'
import ImgCard from './ImgCard'
import CategoryBar from './CategoryBar'
import { baseUrl } from "../constants/axiosConstants";
import Imagem1 from '../images/musica2.jpg'
import Imagem2 from '../images/disco-de-vinil.jpg'
import Imagem3 from '../images/violino.jpg'

const ContainerHome = styled.div`
    max-width: 1024px;
    margin: 24px auto;
    padding: 0 24px;
`

const SlideShow = styled.div`
    margin: 2.5em 5em;
    padding: 2vw;
    background-color: #FFFCEF;
    width: 800px;
`

const ProductsListContainer= styled.div`
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1em;
`
const Img = styled.img`
    width: 650px;
    height: 200px;
`
// Provavelmente terá o Carrossel alterado

export default class DetailsProduct extends React.Component {
    state = {
        listProductsHome: [],
    }
    allProducts = () => {
        axios.get( baseUrl )

        .then((response) => {
            this.setState({
                listProductsHome: response.data.products
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
                        <Img src={Imagem1} />
                        <Img src={Imagem2} />
                        <Img src={Imagem3} />
                    </Carousel>
                </SlideShow>
                <CategoryBar 
                    filterInstruments={this.props.filterInstruments}
                    filterMedia={this.props.filterMedia}
                    filterCollectible={this.props.filterCollectible}
                    filterAudio={this.props.filterAudio}
                    filterSoundSystem={this.props.filterSoundSystem}
                />
                <ProductsListContainer>
                {this.state.listProductsHome.map((product) => {
                    return (
                        <ImgCard 
                            key={product.id}
                            imagem={product.photos}
                            title={product.name}
                            idProduct={product.id}
                            description={product.description}
                            price={product.price}
                            openProductDetails={this.props.openProductDetails}
                        />
                    )
                })}  
                </ProductsListContainer>
            </ContainerHome>
       );
    }
}
