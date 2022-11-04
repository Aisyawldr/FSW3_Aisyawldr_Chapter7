import React from 'react';
import { Container } from 'react-bootstrap';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';

const userfoto1 = 'images/testi1.png';
const userfoto2 = 'images/testi2.png';
const userfoto3 = 'images/testi3.png';
const userfoto4 = 'images/testi4.png';
const userfoto5 = 'images/testi5.png';
const userfoto6 = 'images/testi6.png';
const userfoto7 = 'images/testi7.png';
const star = 'images/Star.png';

const Testimonial = () => {
    return (
        <div id="testimonial">
            <Container className="text-center">
                {/* for header */}
                <h2>Testimonial</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
            </Container>
            <div>
                {/* for Carousel */}
                {/* dibawah ini swiper container */}
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper" centeredSlides={true} loop={true} slidesPerView="auto">
                    <SwiperSlide>
                        <div className="carousel-image">
                            <img src={userfoto1} alt="testimonial user avatar" />
                        </div>
                        <div className="carousel-text ms-5">
                            <div className="rating-stars">
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                            </div>
                            <div className="carousel-desc">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam obcaecati optio minima facilis quaerat, quis, culpa harum deleniti ea quisquam alias reprehenderit cum non nam fugiat corrupti
                                    veritatis ut!
                                </p>
                                <h3 className="username">Aisya Wulandari 20, Padang</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="carousel-image">
                            <img src={userfoto2} alt="testimonial user avatar" />
                        </div>
                        <div className="carousel-text ms-5">
                            <div className="rating-stars">
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                            </div>
                            <div className="carousel-desc">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam obcaecati optio minima facilis quaerat, quis, culpa harum deleniti ea quisquam alias reprehenderit cum non nam fugiat corrupti
                                    veritatis ut!
                                </p>
                                <h3 className="username">Bi Wenjun 24,Tiongkok</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="carousel-image">
                            <img src={userfoto3} alt="testimonial user avatar" />
                        </div>
                        <div className="carousel-text ms-5">
                            <div className="rating-stars">
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                            </div>
                            <div className="carousel-desc">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam obcaecati optio minima facilis quaerat, quis, culpa harum deleniti ea quisquam alias reprehenderit cum non nam fugiat corrupti
                                    veritatis ut!
                                </p>
                                <h3 className="username">Aisya Wulandari 20, Padang</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="carousel-image">
                            <img src={userfoto4} alt="testimonial user avatar" />
                        </div>
                        <div className="carousel-text ms-5">
                            <div className="rating-stars">
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                            </div>
                            <div className="carousel-desc">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam obcaecati optio minima facilis quaerat, quis, culpa harum deleniti ea quisquam alias reprehenderit cum non nam fugiat corrupti
                                    veritatis ut!
                                </p>
                                <h3 className="username">Kim Tae-hyung 26, Korea</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="carousel-image">
                            <img src={userfoto5} alt="testimonial user avatar" />
                        </div>
                        <div className="carousel-text ms-5">
                            <div className="rating-stars">
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                            </div>
                            <div className="carousel-desc">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam obcaecati optio minima facilis quaerat, quis, culpa harum deleniti ea quisquam alias reprehenderit cum non nam fugiat corrupti
                                    veritatis ut!
                                </p>
                                <h3 className="username">Aisya Wulandari 20, Padang</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="carousel-image">
                            <img src={userfoto6} alt="testimonial user avatar" />
                        </div>
                        <div className="carousel-text ms-5">
                            <div className="rating-stars">
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                            </div>
                            <div className="carousel-desc">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam obcaecati optio minima facilis quaerat, quis, culpa harum deleniti ea quisquam alias reprehenderit cum non nam fugiat corrupti
                                    veritatis ut!
                                </p>
                                <h3 className="username">Cha Eun-woo 25, KorSel</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="carousel-image">
                            <img src={userfoto7} alt="testimonial user avatar" />
                        </div>
                        <div className="carousel-text ms-5">
                            <div className="rating-stars">
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                            </div>
                            <div className="carousel-desc">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam obcaecati optio minima facilis quaerat, quis, culpa harum deleniti ea quisquam alias reprehenderit cum non nam fugiat corrupti
                                    veritatis ut!
                                </p>
                                <h3 className="username">Na Jae-min 22, Korea Selatan</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;
