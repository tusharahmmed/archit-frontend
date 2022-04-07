import React, { useCallback, useRef } from 'react';
import Rating from 'react-rating';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from 'swiper';
import { Description } from '../HeroSection/HeroSection';
import { Line, SubTitle, Title } from '../Service/Service';
import { HiStar } from "react-icons/hi";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import "swiper/css/effect-creative";


const Testimonial = () => {

    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);




    return (
        <Container id='testimonial'>

            <Header>
                <SubTitle><Line /> Testimonial</SubTitle>
                <Title>What Are Our <br /> Client Say</Title>
            </Header>

            <SliderWraper>
                <Swiper ref={sliderRef}

                    autoplay={true}
                    effect={"creative"}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ["100%", 0, 0],
                        },
                    }}
                    spaceBetween={50}
                    slidesPerView={1}
                    speed={1000}
                    onSlideChange={() => console.log()}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Autoplay, EffectCreative]}
                    
                >

                    <SwiperSlide>
                    
                        <SliderThumb>
                            <img src="/img/testimonial.png" alt="" />
                        </SliderThumb>

                        <PersonInfo>
                            <Name>Jhon Smith</Name>
                            <Post>CEO & DIRECTOR</Post>
                            <SliderDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</SliderDescription>

                            <RatingWraper>
                                <Rating
                                    emptySymbol={<HiStar color="#214B85" />}
                                    fullSymbol={<HiStar color="#214B85" />}
                                    fractions={2}
                                />
                                <Icons>
                                    <FaArrowLeft onClick={handlePrev} className='swiper-button-prev' />
                                    <FaArrowRight onClick={handleNext} className='swiper-button-next' />
                                </Icons>
                            </RatingWraper>

                        </PersonInfo>
                    </SwiperSlide>

                    <SwiperSlide>

                        <SliderThumb>
                            <img src="/img/testimonial.png" alt="" />
                        </SliderThumb>

                        <PersonInfo>
                            <Name>Jhon Smith</Name>
                            <Post>CEO & DIRECTOR</Post>
                            <SliderDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</SliderDescription>

                            <RatingWraper>
                                <Rating
                                    emptySymbol={<HiStar color="#214B85" />}
                                    fullSymbol={<HiStar color="#214B85" />}
                                    fractions={2}
                                />
                                <Icons>
                                <FaArrowLeft onClick={handlePrev} className='swiper-button-prev' />
                                    <FaArrowRight onClick={handleNext} className='swiper-button-next' />
                                </Icons>
                            </RatingWraper>

                        </PersonInfo>
                    </SwiperSlide>

                    <SwiperSlide>

                        <SliderThumb>
                            <img src="/img/testimonial.png" alt="" />
                        </SliderThumb>

                        <PersonInfo>
                            <Name>Jhon Smith</Name>
                            <Post>CEO & DIRECTOR</Post>
                            <SliderDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</SliderDescription>

                            <RatingWraper>
                                <Rating
                                    emptySymbol={<HiStar color="#214B85" />}
                                    fullSymbol={<HiStar color="#214B85" />}
                                    fractions={2}
                                />
                                <Icons>
                                <FaArrowLeft onClick={handlePrev} className='swiper-button-prev' />
                                    <FaArrowRight onClick={handleNext} className='swiper-button-next' />
                                </Icons>
                            </RatingWraper>

                        </PersonInfo>
                    </SwiperSlide>

                    <SwiperSlide>

                        <SliderThumb>
                            <img src="/img/testimonial.png" alt="" />
                        </SliderThumb>

                        <PersonInfo>
                            <Name>Jhon Smith</Name>
                            <Post>CEO & DIRECTOR</Post>
                            <SliderDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</SliderDescription>

                            <RatingWraper>
                                <Rating
                                    emptySymbol={<HiStar color="#214B85" />}
                                    fullSymbol={<HiStar color="#214B85" />}
                                    fractions={2}
                                />
                                <Icons>
                                <FaArrowLeft onClick={handlePrev} className='swiper-button-prev' />
                                    <FaArrowRight onClick={handleNext} className='swiper-button-next' />
                                </Icons>
                            </RatingWraper>

                        </PersonInfo>
                    </SwiperSlide>







                </Swiper>
            </SliderWraper>

        </Container>
    );
};

export default Testimonial;



const Container = styled.section`
background: var(--section-background);
padding: 6rem 10rem 4rem;

@media (max-width: 1200px){
    padding: 6rem 5rem;
}
@media (max-width: 900px){
    padding: 4rem 4rem;
}
@media (max-width: 800px){
    padding: 4rem 4rem;
}
@media (max-width: 700px){
    padding: 6rem 1rem 2rem;
}
`;


const Header = styled.div`

`;

const SliderWraper = styled.div`
padding: 4rem 0rem 1rem;
`;
const SliderItem = styled(SwiperSlide)`
display: flex;
`;


const SliderThumb = styled.div`

`;
const PersonInfo = styled.div`
margin-left: 30px;
width: 100%;
`;
const Name = styled.h3`
font-size: 25px;
font-weight: 600;
color: var(--font-title);
`;
const Post = styled.p`
font-size: 16px;
color: var(--font-title);
`;
const SliderDescription = styled(Description)`
margin: 15px 0; 
`;

const RatingWraper = styled.div`
display: flex;
align-items: center;
`;
const Icons = styled.div`
margin-left: 120px;
color: var(--button-background);

svg{
    margin-right: 0 .6rem;
    padding: 10px;
    display: inline-block;
    cursor: pointer;
}
`;