import { curve, heroBackground, hero1, hero2, hero3, hero4 } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { useRef } from "react";
import CompanyLogos from "./CompanyLogos";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";

const Hero = () => {
    const parallaxRef = useRef(null);
    const heroImages = [hero1, hero2, hero3, hero4];
    SwiperCore.use([Autoplay]);

    return (
        <Section
            className="pt-[12rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="/home"
        >
            <div className="container relative" ref={parallaxRef}>
                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
                    <h1 className="h1 mb-6">
                        Explore the Possibilities of Blockchain with {` `}
                        <span className="inline-block relative">
                            XStock{" "}
                            <img
                                src={curve}
                                className="absolute top-full left-0 w-full xl:-mt-2"
                                width={624}
                                height={28}
                                alt="Curve"
                            />
                        </span>
                    </h1>
                    <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                        Unleash the power of AI and Blockchain within XStock.
                        Buy and lend images with XStock, a fully decentralized
                        product built on MultiversX.
                    </p>
                    <Button href="/#features" white>
                        Get started
                    </Button>
                </div>
                <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                    <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                        <div className="relative bg-n-8 rounded-[1rem]">
                            <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
                            <Swiper
                                className="swiper-container"
                                spaceBetween={50}
                                slidesPerView={1}
                                loop={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                            >
                                {heroImages.map((image, index) => (
                                    <SwiperSlide
                                        key={index}
                                        className="swiper-slide"
                                    >
                                        <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                                            <img
                                                src={image}
                                                className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                                                width={1024}
                                                height={490}
                                                alt={`Image ${index + 1}`}
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <Gradient />
                    </div>
                    <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
                        <img
                            src={heroBackground}
                            className="w-full"
                            width={624}
                            height={624}
                            alt="hero"
                        />
                    </div>

                    <BackgroundCircles />
                </div>

                <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
            </div>

            <BottomLine />
        </Section>
    );
};

export default Hero;
