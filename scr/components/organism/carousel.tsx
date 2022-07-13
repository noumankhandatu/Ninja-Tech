import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
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
          <Image
            src="/carouselImages/one.png"
            width={220}
            height={89}
            alt="intro pic"
          ></Image>
        </div>
        <div>
          <Image
            src="/carouselImages/two.png"
            width={220}
            height={"100%"}
            alt="intro pic"
          ></Image>
        </div>
        <div>
          <Image
            src="/carouselImages/three.png"
            width={220}
            height={89}
            alt="intro pic"
          ></Image>
        </div>
        <div>
          <Image
            src="/carouselImages/four.png"
            width={"100%"}
            height={89}
            alt="intro pic"
          ></Image>
        </div>
        <div>
          <Image
            src="/carouselImages/five.png"
            width={220}
            height={89}
            alt="intro pic"
          ></Image>
        </div>
        <div>
          <Image
            src="/carouselImages/six.png"
            width={220}
            height={89}
            alt="intro pic"
          ></Image>
        </div>
      </Carousel>
    </div>
  );
}
