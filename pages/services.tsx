import ExpectMoreBanner from "../scr/components/organism/expectMoreBanner";
import Wrapper from "../scr/components/organism/wrapper";
import { ProjectInMindBanner } from "../scr/components/organism/banners";
import Form from "../scr/components/organism/form";
import ItemCarousel from "../scr/components/organism/carousel";
const Services = () => {
  return (
    <div>
      <ExpectMoreBanner
        titleone="Best Solutions for Your Business"
        titletwo=""
        description="NinjaTech are here to establish your brand identity by providing you with the best solutions for your business. With the aim to transform your requirement into reality, NinjaTech is bound for your services."
        button={true}
      />
      <Wrapper
        contained={true}
        className="grid grid-cols-[1fr,2fr]  pb-10 pt-10"
      >
        <div>
          <p className="text-[42px]">You Share Your Idea</p>
          <p className="text-[42px] font-bold">We get it done</p>
        </div>
        <div>
          <p className="text-[19px]">
            We lead in the market, excellently providing client-driven results.
            Once you share your idea with us, we start the process of delivering
            high-quality solutions and services for your business. NinjaTech has
            been serving for one decade in the industry with a team of tech
            experts and management authorities.
          </p>
        </div>
      </Wrapper>
      <Wrapper contained={true} className="mt-20 mb-20">
        <ItemCarousel />
      </Wrapper>
      <Form />
      <ProjectInMindBanner />
    </div>
  );
};

export default Services;
