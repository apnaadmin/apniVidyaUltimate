"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    profession2: string;
    profession3: string;
    profession4: string;
    name: string;
    imgSrc: string;

}

const postData:any = [
    {
        profession: 'A+ Communication Skills',
        profession2: 'Min 1+ year experience',
        profession3: 'In-depth Knowledge',        
        profession4: 'Feedback and Assessment',
        name: 'Home tutors',
        imgSrc: '/assets/mentor/home_tutor2.jpg',

    },
    {
        profession: 'Study materials',
        profession2: 'Mocktests',
        profession3: 'Quick revision',
        name: 'Various courses',
        imgSrc: '/assets/mentor/study.jpg',
    },
    {
        profession: 'Studies',
        profession2: 'Career Opportunities',
        profession3: 'Mentorship',
        name: 'Guidance',
        imgSrc: '/assets/mentor/guidance.png',
    }
]

// CAROUSEL SETTINGS

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", position: 'absolute', alignItems: "center" , background: "#D5EFFA", padding: "58px", borderRadius: "30px", border: "1px solid #1A21BC" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center" , background: "#D5EFFA", padding: "28px", borderRadius: "30px", border: "1px solid #1A21BC" }}
            onClick={onClick}
        />
    );
}



export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
            speed: 4000,
            nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
            prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
            autoplaySpeed: 4500,
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
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 530,
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
            <div className="py-10 sm:py-24 bg-paleblue" id="mentor">

                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 px-4 lg:px-8 relative'>
                    <h2 className="lh-82 text-midnightblue text-4xl md:text-55xl text-center md:text-start font-semibold">Service We <br /> Provide:</h2>

                    <Slider {...settings}>
                        {postData.map((items:any, i:any) => (
                            <div key={i}>
                                <div className='m-10 py-18 md:my-16 text-center'>
                                    <div className="relative">
                                        <Image src={items.imgSrc} alt="user-image" width={306} height={0} className="inline-block m-auto" />
                                        {/* <div className="absolute right-[84px] bottom-[102px] bg-white rounded-full p-4"> */}
                                        {/* <img src="/_next/image?url=%2Fassets%2Fapnividyalogo.png&w=32&q=100"> */}
                                            
                                            {/* </img>                       */}
                                            
                                                              {/* </div> */}
                                    </div>
                                    <div className="-mt-10">
                                        <br></br>
                                        <br></br>
                                        <h3 className='text-2xl font-semibold text-lightblack'>{items.name}</h3>
                                        <h4 className='text-lg font-normal text-lightblack pt-2 opacity-50'>{items.profession}</h4>
                                        <h4 className='text-lg font-normal text-lightblack pt-2 opacity-50'>{items.profession2}</h4>
                                        <h4 className='text-lg font-normal text-lightblack pt-2 opacity-50'>{items.profession3}</h4>
                                        <h4 className='text-lg font-normal text-lightblack pt-2 opacity-50'>{items.profession4}</h4>
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
