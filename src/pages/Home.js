import React from 'react'
import styled from 'styled-components'
import Banner from '../components/Banner'
import Bonus from '../components/Bonus'
import ProductCard from '../components/ProductCard'
import { themes } from '../styles/ColorStyles'
import {  H1 } from '../styles/TextStyles'
import SwiperCore, {EffectFade, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import Display from '../components/Display'
import Newsletter from '../components/Newsletter'

// install Swiper components
SwiperCore.use([Navigation,EffectFade, Pagination, Scrollbar, A11y]);


const Home = () => {
    return (
        <div>

        <Slider> 
        <Swiper
        effect="fade"
        height="500"
      spaceBetween={0}
      slidesPerView={1}
      navigation
  
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={(swiper) => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>

    </Swiper>
        </Slider>

       <Display/>
            

            <Product>
<Productcontainer>

    <ProductTitle><Titleh1>Our <span>Shoes</span></Titleh1></ProductTitle>
    <Products>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    </Products>
</Productcontainer>

            </Product>


            <Banner/>
            <Product>
<Productcontainer>

    <ProductTitle><Titleh1>Our <span>Clothes</span></Titleh1></ProductTitle>
    <Products>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    </Products>
</Productcontainer>

            </Product>
            <Banner/>
            <Product>
<Productcontainer>

    <ProductTitle><Titleh1>Our <span>Accessories</span></Titleh1></ProductTitle>
    <Products>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    </Products>
</Productcontainer>

            </Product>
            <Newsletter/>
            <Bonus/>
        </div>
    )
}

const Slider = styled.div`
height: 600px;
width: 100%;
margin: 8px 0 40px 0;
`



const Product = styled.div`
width: 100%;
min-height:500px;
margin: 30px 0;
`
const Productcontainer = styled.div`

max-width:1200px;
margin: 0 auto;

width:100%;
height:100%;
padding: 10px 15px;

`
const ProductTitle = styled.div`
height: 80px;
width:100%;
display: flex;
align-items: center;
justify-content: center;
margin: 16px 0;
span{
    color: ${themes.jane};
}

`
const Titleh1 = styled(H1)``
const Products = styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
grid-gap: 20px;

@media only screen and (max-width:850px){
    grid-template-columns: repeat(3,1fr);
}

@media only screen and (max-width:550px){
    grid-template-columns: repeat(1,1fr);
}
@media only screen and (max-width:350px){
    grid-template-columns: repeat(1,1fr);
}
`

export default Home
