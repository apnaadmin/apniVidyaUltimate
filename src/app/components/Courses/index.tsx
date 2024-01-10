"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from '@heroicons/react/24/solid'

// CAROUSEL DATA

interface DataType {
    heading: string;
    heading2: string;
    imgSrc: string;
    name: string;
    students: number;
    classes: number;
    price: number;
    rating: number;
}

const postData: DataType[] = [
    {
        heading: 'IIT',
        heading2: 'Mains and Advanced',
        name: "Coming Soon",
        imgSrc: '/assets/courses/jee.jpg',
        students: 25,
        classes: 12,
    },
    {
        heading: 'NEET',
        heading2: 'UG and PG',
        name: "Coming Soon",
        imgSrc: '/assets/courses/neet.jpg',
        students: 130,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'Banking Exams',
        heading2: 'IBPS,SBI,RBI and RRB',
        name: "Coming Soon",
        imgSrc: '/assets/courses/bank.png',
        students: 120,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'SSC CGL',
        heading2: 'Coaching for SSC CGL',
        name: "Coming Soon",
        imgSrc: '/assets/courses/ssc.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'Other Competitive Exams',
        // heading2: 'Webflow this Week!',
        name: "Coming Soon",
        imgSrc: '/assets/courses/other.png',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    }
    
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
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
            <div id="courses">
                <div className='mx-auto max-w-7xl sm:py-8 px-4 lg:px-8 '>

                    <div className="sm:flex justify-between items-center">
                        <h3 className="text-midnightblue text-4xl lg:text-55xl font-semibold mb-5 sm:mb-0">Courses We Provide : </h3>
                        <Link href={'/'} className="text-Blueviolet text-lg font-medium space-links">Explore courses&nbsp;&gt;&nbsp;</Link>
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>

                                <div className='bg-white m-3 px-3 pt-3 pb-12 my-20 shadow-courses rounded-2xl'>
                                    <div className="relative rounded-3xl">
                                        <Image src={items.imgSrc} alt="gaby" width={389} height={262} className="m-auto clipPath" />
                                        <div className="absolute right-5 -bottom-2 bg-ultramarine rounded-full p-6">
                                            <h3 className="text-white uppercase text-center text-sm font-medium">best <br /> seller</h3>
                                        </div>
                                    </div>

                                    <div className="px-3">
                                        <h4 className='text-2xl font-bold pt-6 text-black'>{items.heading}</h4>
                                        <h4 className='text-2xl font-bold pt-1 text-black'>{items.heading2}</h4>

                                        <div>
                                            <h3 className='text-base font-normal pt-6 opacity-75'>{items.name}</h3>
                                        </div>

                                        <div className="flex justify-between items-center py-6">
                                            <div className="flex gap-4">
                                                <div className="flex">
                                                   
                                                </div>
                                            </div>
                                            <div>
                                            </div>
                                        </div>

                                        <hr style={{ color: "#C4C4C4" }} />

                                        <div className="flex justify-between pt-6">
                                            <div className="flex gap-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z" stroke="#42C2DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" stroke="#42C2DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                                                     <h3 className="text-base font-medium text-black opacity-75">{items.classes} Classes</h3>
                                            </div>
                                            <div className="flex gap-4">

                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#42C2DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#42C2DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#42C2DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#42C2DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg> 

                                                                                 <h3 className="text-base font-medium text-black opacity-75">{items.students}+ Teachers</h3>
                                            </div>
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
