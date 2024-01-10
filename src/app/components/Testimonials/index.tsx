"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: any= [
    {
        name: "Swami Vivekananda",
        // profession: 'CEO, Parkview Int.Ltd',
        comment: '‘‘Education is the manifestation of perfection already in a man.’’',
        imgSrc: '/assets/testimonial/swamivivekananda2.jpg',
    },
    {
        name: "Elon Musk",
        // profession: 'CEO, Parkview Int.Ltd',
        comment: '‘‘Education is the foundation upon which we build our future’’',
        imgSrc: '/assets/testimonial/elon2.jpg',
    },
    {
        name: "Sir Ratan tata",
        // profession: 'CEO, Parkview Int.Ltd',
        comment: '‘‘Ups and downs in life are very important to keep us going because a straight line even in an ECG means we are not alive.’’',
        imgSrc: '/assets/testimonial/ratantata2.jpg',
    },
    {
        name: "Acharya Chanakya",
        // profession: 'CEO, Parkview Int.Ltd',
        comment: '‘‘The roots of education are bitter, but the fruit is sweet’’',
        imgSrc: '/assets/testimonial/chanakya2.jpg',
    },
    {
        name: "Dr. APJ Abdul Kalam",
        // profession: 'CEO, Parkview Int.Ltd',
        comment: '‘‘Education is the most powerful weapon which you can use to change the world.’’',
        imgSrc: '/assets/testimonial/apj2.jpg',
    },
    // {
        //     name: "Cody Fisher",
        //     profession: 'CEO, Parkview Int.Ltd',
        //     comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        //     imgSrc: '/assets/mentor/user3.png',
        // },
    ]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: true,
            dotsClass: "slick-dots",
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (
            <div className="pt-40 pb-10 sm:pb-32 lg:py-32" id="testimonial">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8'>
                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className={`bg-white m-4 p-5 my-20 relative ${i % 2 ? 'middleDiv' : 'testimonial-shadow'}`}>
                                    <div className="absolute top-[-45px]">
                                        <Image src={items.imgSrc} alt={items.imgSrc} width={100} height={100} className="inline-block" />
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <h4 className='text-base font-normal text-darkgray my-4'>{items.comment}</h4>
                                    <hr style={{ color: "#D7D5D5" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-lg font-medium text-darkbrown pt-4 pb-2'>{items.name}</h3>
                                            <h3 className='text-sm font-normal text-lightgray pb-2'>{items.profession}</h3>
                                        </div>
                                        <div className="flex">
                                            {/* <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-lightgray" /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}
//c