import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/BookBuster.jpeg";
import img2 from "../assets/bk-countries.jpg";
import img3 from "../assets/bk-rickandmorty.jpg";
import img4 from "../assets/QR.jpg";
import img5 from "../assets/weatherweb.jpg";

const AllProyects = () => {
  const projects = [
    {
      title: "BookBuster",
      image: img1,
      url: "https://book-buster-front-fhekz.vercel.app",
    },
    {
      title: "Countries API",
      image: img2,
      url: "https://github.com/bautistax/PI-Countries-main",
    },
    {
      title: "Rick & Morty API",
      image: img3,
      url: "https://github.com/bautistax/Rick-and-Morty",
    },
    {
      title: "QR-component",
      image: img4,
      url: "https://github.com/bautistax/qr-code-component-main",
    },
    {
      title: "WeatherApp",
      image: img5,
      url: "https://weatherappi.vercel.app/",
    },
  ];

  const Project = ({ project }) => {
    const handleClick = () => {
      window.location.href = project.url;
    };

    return (
      <div
        onClick={handleClick}
        style={{ cursor: "pointer" }}
        className="relative w-full h-96 max-w-md mx-auto mb-4 overflow-hidden group"
      >
        {/* overlay */}
        <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

        {/* img */}
        <img
          src={project.image}
          alt=""
          className="group-hover:scale-125 transition-all duration-500 w-full h-full object-cover rounded-lg"
        />

        {/* title */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-50">
          <span className="text-3xl text-white">{project.title}</span>
        </div>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
      <div id="proyects" className="container mx-auto mt-32 mb-44 lg:px-4 lg:mx-14">
        <div className="lg:flex-1 lg:ml-auto">
          <h2 className="text-4xl lg:text-5xl leading-tight text-accent mb-6 lg:mb-14">
            All&nbsp;&nbsp;Proyects
          </h2>
          <div>
            <Slider {...settings}>
              {projects.map((project) => (
                <Project key={project.title} project={project} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
  );
};

export default AllProyects;
