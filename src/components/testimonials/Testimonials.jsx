import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const data = [
  {
    avatar: AVTR1,
    name: "Ernest Achiever",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos adipisci autem, incidunt tempore hic repellat aspernatur labore voluptates ut, accusantium delectus earum consequuntur in esse, facere ab sit neque.",
  },
  {
    avatar: AVTR2,
    name: "Ernest Achiever",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos adipisci autem, incidunt tempore hic repellat aspernatur labore voluptates ut, accusantium delectus earum consequuntur in esse, facere ab sit neque.",
  },
  {
    avatar: AVTR3,
    name: "Ernest Achiever",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos adipisci autem, incidunt tempore hic repellat aspernatur labore voluptates ut, accusantium delectus earum consequuntur in esse, facere ab sit neque.",
  },
  {
    avatar: AVTR4,
    name: "Ernest Achiever",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos adipisci autem, incidunt tempore hic repellat aspernatur labore voluptates ut, accusantium delectus earum consequuntur in esse, facere ab sit neque.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        pagination={true}
        spaceBetween={40}
        slidesPerView={1}
        modules={[Pagination]}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
