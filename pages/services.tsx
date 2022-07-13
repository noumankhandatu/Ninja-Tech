import ExpectMoreBanner from "../scr/components/organism/expectMoreBanner";
import Wrapper from "../scr/components/organism/wrapper";
import { ProjectInMindBanner } from "../scr/components/organism/banners";
import Form from "../scr/components/organism/form";
import { AiOutlineRight } from "react-icons/ai";
import ItemCarousel from "../scr/components/organism/carousel";
import DeploymentSevicesBanner from "../scr/components/organism/deploymentSevicesBanner";
import Button from '../scr/components/molecule/button';
const Services = () => {
  const cssProps =
    "text-[16px] font-medium text-App-orange mr-8  cursor-pointer";
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
      <Wrapper contained={true} className="mt-20 mb-40">
        <ItemCarousel />
      </Wrapper>
      {/* carousel ended */}
      <Wrapper contained className="mt-20 mb-20">
        <p className={"text-[42px] font-medium"}>Our development services</p>
      </Wrapper>
      {/* banners started */}
      <DeploymentSevicesBanner
        image="https://ninjatech.agency/wp-content/uploads/2022/06/services-web-mobile.png"
        title={"Web & Mobile Development"}
        description={
          "Our website and mobile application development group have abundant skills in conveying answers for financed new companies and venture organizations."
        }
        tagone={"IOS"}
        tagtwo={"Andriod"}
        tagthree={"Cross-PlateForm"}
        tagfour={"Frontend"}
        tagfive={"Backend"}
      />
      <Wrapper contained>
        <div>
          <div className="mt-20 mb-20 ">
            <div className="grid grid-cols-[1fr,2fr]  items-center">
              <div>
                <p className="text-[36px]">Ideation & Strategy</p>
                <div className="flex  mt-5 mb-8 ">
                  <p className={`${cssProps}`}>Product_Strategy</p>
                  <p className={`${cssProps}`}>Digital_Transformation</p>
                  <p className={`${cssProps}`}>Legacy_App_Modernisation</p>
                  <p className={`${cssProps}`}>Research_and_Development</p>
                </div>
                <p className="text-[16px]">
                  The idea begins with imagination, and at NinjaTech, we plan
                  vital moves with substantial business results from inside the
                  association. To deliver progress significant for everyone.
                </p>
              </div>
              <img
                className=""
                src="https://ninjatech.agency/wp-content/uploads/2022/06/ideation-strategy.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </Wrapper>
      <DeploymentSevicesBanner
        title={"Product Design"}
        image="https://ninjatech.agency/wp-content/uploads/2022/06/product-design.png"
        description={
          "Our Design and UX group makes consistent, client-driven plans that feature your image and supercharge your profit. We'll cooperate to make the ideal plan that meets your brief yet ensures your site remains simple to oversee."
        }
        tagone={"UX design"}
        tagtwo={"UI design"}
        tagthree={"Product Strategy"}
        tagfour={"Workshops"}
      />
      <Wrapper contained>
        <div>
          <div className="mt-20 mb-20 ">
            <div className="grid grid-cols-[1fr,2fr]  items-center">
              <div>
                <p className="text-[36px]">Artificial Intelligence</p>
                <div className="flex   mt-5 mb-8 ">
                  <p className={`${cssProps}`}>Data_Science</p>
                  <p className={`${cssProps}`}>Machine_Learning</p>
                  <p className={`${cssProps}`}>Computer_Vision</p>
                  <p className={`${cssProps}`}>Voice_Assistants_&_Chatbots</p>
                </div>
                <p className="text-[16px]">
                  The innovation can revaluate business processes, make better
                  client encounters, and increase and improve independent human
                  direction. It is seen as perhaps the most significant space of
                  chance for some organizations today – and a central part of
                  most computerized change endeavours.
                </p>
              </div>
              <img
                className=""
                src="https://ninjatech.agency/wp-content/uploads/2022/06/artificial-intelligence.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </Wrapper>
      <DeploymentSevicesBanner
        title={"Cloud Services"}
        description={
          "As an ever-increasing number of organizations search for financially savvy measures to fortify their IT foundation, continuing to the cloud arises as to the most favoured method for doing so."
        }
        tagone={"Cloud App Development"}
        image="https://ninjatech.agency/wp-content/uploads/2022/06/cloud-services.png"
        tagtwo={"Cloud Deployment        "}
        tagthree={"AWS Cloud Development"}
        tagfour={"Google Cloud Development        "}
      />
      {/* pink baner */}
      <Wrapper full>
        <div className="bg-[#FFF5F3] ">
          <div className="gap-10  p-32  pb-10 flex justify-evenly items-center ">
            <p className={"text-[42px] font-bold"}>
              Tangible results,
              <br />
              right on schedule
            </p>
            <div>
              <p className={"text-[42px] font-bold"}>2 days</p>
              <small className={"text-[18px]"}>for an estimate</small>
            </div>
            <div>
              <p className={"text-[42px] font-bold"}>2 weeks</p>
              <small className={"text-[18px]"}>for the prototype</small>
            </div>
            <div>
              <p className={"text-[42px] font-bold"}>3 months</p>
              <small className={"text-[18px]"}>for the MVP</small>
            </div>
          </div>
          <div>
            <p className="text-[18px] text-center">
              Need your idea verified fast?
            </p>
          </div>
         <div className="flex justify-center pb-20 pt-10"> 
          <Button variant="contained" className="rounded filled" endIcon={<AiOutlineRight />}>
            Get a Quote
          </Button></div>
        </div>
      </Wrapper>
      <Form />
      <ProjectInMindBanner />
    </div>
  );
};

export default Services;
