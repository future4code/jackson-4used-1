import React from "react";
import styled from "styled-components";
import Carousel from 'react-elastic-carousel'
import MediaCard, { CardMedia } from "../assets/components/imgCard";

const ContainerHome = styled.div`
    margin: 2vw;
    padding: 2vw;
`

const SlideShow = styled.div`
    margin: 2vw;
    padding: 2vw;
    background-color: #43ADA5;
`

const ProductsListContainer= styled.div`
    margin: 2vw;
    padding: 2vw;
    display: grid;
    gap: 1vw;
    grid-template-columns: repeat(3, 1fr);
`

// Provavelmente terá o Carrossel alterado

export default function HomePage() {
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
                <MediaCard />
                <MediaCard />
                <MediaCard />
                <MediaCard />
                <MediaCard />
                <MediaCard />
            </ProductsListContainer>
        </ContainerHome>
    );
}