import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export const MobileProduct = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            // {
            //     breakpoint: 500,
            //     settings:{
            //         slidesToShow: 1,
            //         slidesToScroll: 0
            //     }
            // }
        ]
    };
    return (
        // <div>CardCarousel</div>
        <>

            {/* this  Mobile Scroll Section*/}
            <div className="container mx-auto mt-8">
                <div className='flex items-center justify-between'>
                    <h2 className="text-3xl  mb-4 text-[35px]
                    font-mono	font-family: ui-monospacpxe, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono Courier New monospace
                    font-normal
                    ">MOBILE PRODUCTS</h2>
                    <a href="#" className='underline hover:no-underline text-[16px] tracking-[1px]'>GO TO SHOP</a>
                </div>
                <Slider {...settings}>
                    <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-3 md:gap-3 '>
                        <img className="mx-auto" src="https://demo.templatesjungle.com/ministore/images/product-item1.jpg" alt="Item 1" />
                        {/* <div className='flex justify-center items-center'>
                            <button className='flex items-center border-solid border-2 border-black py-3 px-2 '>
                                <span>ADD TO CART</span>
                                <span><ion-icon name="cart-outline"></ion-icon></span>
                            </button>
                        </div> */}
                        <div className="flex justify-between p-2 text-[20px]">
                            <p>IPHONE 10</p>
                            <p><b className='text-sky-400'>$980</b></p>
                        </div>
                        
                    </div>
                    <div>
                        <img className="mx-auto" src="https://demo.templatesjungle.com/ministore/images/product-item2.jpg" alt="Item 2" />
                        <div className="flex justify-between p-2 text-[20px]">
                            <p>IPHONE 10</p>
                            <p><b className='text-sky-400'>$980</b></p>
                        </div>
                    </div>
                    <div>
                        <img className="mx-auto" src="https://demo.templatesjungle.com/ministore/images/product-item3.jpg" alt="Item 3" />
                        <div className="flex justify-between p-2 text-[20px]">
                            <p>IPHONE 10</p>
                            <p><b className='text-sky-400'>$980</b></p>
                        </div>
                    </div>
                    <div>
                        <img className="mx-auto" src="https://demo.templatesjungle.com/ministore/images/product-item4.jpg" alt="Item 4" />
                        <div className="flex justify-between p-2 text-[20px]">
                            <p>IPHONE 10</p>
                            <p><b className='text-sky-400'>$980</b></p>
                        </div>
                    </div>
                    {/* Add more items here */}
                </Slider>
            </div>
        </>
    )
}
