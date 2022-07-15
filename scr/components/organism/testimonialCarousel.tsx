import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import TestimonialCard from "../molecule/testimonialCard";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export default function ItemCarousel() {
  return (
    <div>
      <Carousel
        arrows={false}
        autoPlay={true}
        draggable={true}
        infinite={true}
        slidesToSlide={1}
        responsive={responsive}
      >
        <div>
          <TestimonialCard />
        </div>
        <div>
          <TestimonialCard />
        </div>
        <div>
          <TestimonialCard />
        </div>
      </Carousel>
    </div>
  );
}
