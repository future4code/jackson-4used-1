import React from "react";
import styled from "styled-components";
import Carousel from 'react-elastic-carousel'
import MediaCard, { CardMedia } from "../assets/components/imgCard";

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
