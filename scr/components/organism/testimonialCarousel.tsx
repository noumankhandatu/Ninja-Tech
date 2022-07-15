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
          <TestimonialCard
            img={
              "https://ninjatech.agency/wp-content/themes/ninja/assets/images/testi-user-2.png"
            }
            name={"Tupac Shakur"}
            place={"West Side"}
            description={
              "We have done many projects with NinjaTech and we were never disappointedby their work. We will highly recommend NinjaTech for the best Website &App development services & solutions."
            }
          />
        </div>
        <div>
          <TestimonialCard
            img={
              "https://ninjatech.agency/wp-content/themes/ninja/assets/images/netherland.jpeg"
            }
            name={"Nipsey Hussle"}
            place={"London , Uk"}
            description={
              "My company utilizes Ninja for assistance with expediting our production. They have provided exceptional service thus far during the numerous projects I have contracted them for, and Icontinue to work with them. Great company, great team, and great pricing."
            }
          />
        </div>
        <div>
          <TestimonialCard
            img={
              "https://ninjatech.agency/wp-content/themes/ninja/assets/images/testi-user-1.png"
            }
            name={"Suge Knight"}
            place={"California"}
            description={
              "We found Ninja to be a key component in helping with our customized web development, webapplications and plugin customization. Having Ninja on onboard gave us the confidence to say yesto all jobs!"
            }
          />
        </div>
        <div>
          <TestimonialCard
            img={
              "https://ninjatech.agency/wp-content/themes/ninja/assets/images/italy.jpeg"
            }
            name={"Mike Dane"}
            place={"NewYork"}
            description={
              "We found Ninja to be a key component in helping with our customized web development, webapplications and plugin customization. Having Ninja on onboard gave us the c"
            }
          />
        </div>
      </Carousel>
    </div>
  );
}
