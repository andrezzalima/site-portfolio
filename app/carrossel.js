import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


const Carousel = () => {
  const projects = [
    {
      image: "/images/projeto1.png",
      link: "https://challenge-frontend-mentor-eight.vercel.app/"
    },
    {
      image: "/images/projeto2.png",
      link: "https://bytes4colors-j9vc9ns42-andrezzalima.vercel.app/"
    },
    {
      image: "/images/projeto4.png",
      link: "https://pixel-31hycb1qw-andrezzalimas-projects.vercel.app/"
    },
    {
      image: "/images/projeto5.png",
      link: "https://cristianefabres.vercel.app/"
    }
  ];

  return (
    <div className="carousel-container relative w-full">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        breakpoints={{
            640: {
              slidesPerView: 1, 
            },
            768: {
              slidesPerView: 2, 
            },
          }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="carousel overflow-hidden w-full"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="p-5 text-center">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={project.image}
                  alt={`Project ${index + 1}`}
                  width={500}
                  height={300}
                  className="mx-auto rounded-lg"
                />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      
    </div>
  );
};

export default Carousel;
