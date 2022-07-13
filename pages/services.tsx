import ExpectMoreBanner from "../scr/components/organism/expectMoreBanner";
import Wrapper from "../scr/components/organism/wrapper";
import { ProjectInMindBanner } from "../scr/components/organism/banners";
import Form from "../scr/components/organism/form";
import { AiOutlineRight } from "react-icons/ai";
import ItemCarousel from "../scr/components/organism/carousel";
import DeploymentSevicesBanner from "../scr/components/organism/deploymentSevicesBanner";
import Button from "../scr/components/molecule/button";
import AppFont from "../scr/components/atom/AppFont";
import TechnologyCard from "../scr/components/molecule/TechnologyCard";
const Services = () => {
  const cssProps =
    "text-[16px] font-medium text-App-orange mr-8  cursor-pointer";
  const TechnologyCardData = [
    {
      title: "Android      ",
      description:
        "NinjaTech is not new or naïve in this industry, with the skill-proven Android developers build your application with us.",
      img: "https://ninjatech.agency/wp-content/uploads/2022/06/android-1.png",
    },
    {
      title: "iOs",
      description:
        "We have a great team in iOS development; NinjaTech has adept 130+ projects with the iOS and still counting.",
      img: "https://ninjatech.agency/wp-content/uploads/2022/06/apple-black-logo.png",
    },
    {
      title: "Cross-platform",
      description:
        "It's the bridge between the two platforms to build your app, and making it available on different platforms is now possible with cross-platform technology.",
      img: "https://ninjatech.agency/wp-content/uploads/2022/06/cross-platform.png",
    },
    {
      title: "Front-end      ",
      description:
        "With the expert team of Front-end Developers, now you can make your requirement into reality.",
      img: "https://ninjatech.agency/wp-content/uploads/2022/06/ux.png",
    },
    {
      title: "Backend",
      description:
        "Our developers are proficient in developing the backend profile of your website solid and reliable.",
      img: "https://ninjatech.agency/wp-content/uploads/2022/06/backend.png",
    },
    {
      title: "Artificial Intelligence",
      description:
        "Get the leverage to accelerate data-driven decisions with Artificial Intelligence solutions.",
      img: "https://ninjatech.agency/wp-content/uploads/2022/06/ai.png",
    },
  ];
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
                <AppFont>
                  The idea begins with imagination, and at NinjaTech, we plan
                  vital moves with substantial business results from inside the
                  association. To deliver progress significant for everyone.
                </AppFont>
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
                <AppFont>
                  The innovation can revaluate business processes, make better
                  client encounters, and increase and improve independent human
                  direction. It is seen as perhaps the most significant space of
                  chance for some organizations today – and a central part of
                  most computerized change endeavours.
                </AppFont>
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
            <Button
              variant="contained"
              className="rounded filled"
              endIcon={<AiOutlineRight />}
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </Wrapper>
      <Wrapper full className={"bg-[#F5F5F5]"}>
        {/* little blue banner */}
        <Wrapper contained className="p-4">
          <div>
            <div className="mt-20 mb-20 ">
              <div className="grid grid-cols-[1fr,1fr] justify-center  justify-items-center	  items-center">
                <div>
                  <p className="text-[36px]">
                    Our expertise covers many industries
                  </p>
                  <div className="flex   mt-5 mb-8 ">
                    <p className={`${cssProps} bg-white p-2 rounded`}>
                      Healthcare
                    </p>
                    <p className={`${cssProps} p-2`}>E-commerce</p>
                    <p className={`${cssProps} p-2`}>Entertainment</p>
                    <p className={`${cssProps} p-2`}>Finetech</p>
                    <p className={`${cssProps} p-2`}>Others</p>
                  </div>
                  <AppFont>
                    Our plan, programming, content, and advertising group
                    invests wholeheartedly in its work and has phenomenal
                    abilities in creating worldwide healthcare & beauty brands
                    and making advanced encounters for their audience.
                  </AppFont>
                </div>
                <img
                  className=""
                  src="https://ninjatech.agency/wp-content/uploads/2022/06/industries-img.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Wrapper>
      </Wrapper>
      {/* Techonology Cards */}
      <Wrapper contained className="p-32">
        <div className="grid grid-cols-[1fr,1.4fr] gap-10 items-center">
          <div>
            <p className="text-[42px] font-normal">
              Let's choose the best technology for you
            </p>
            <AppFont className="mt-8 mb-8">
              When it's come to building a website or an application, we have
              the privilege to choose which technology will help us to develop
              our digital brand in the way we have been imagined. With a team of
              experienced and certified developers and designers, we have been
              leading in the market for the last decade.
            </AppFont>
            <AppFont className="mb-5">
              Make your website look dazzling and smooth by keeping the backend
              and front-end strong. We have an Excellency in building Android
              and iOS applications and in cross-platform.
            </AppFont>
            <Button
              variant="contained"
              endIcon={<AiOutlineRight />}
              className="filled mt-12 rounded"
            >
              Get a Quote
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-5 rounded ">
            {TechnologyCardData.map((items) => {
              return <TechnologyCard items={items} />;
            })}
          </div>
        </div>
      </Wrapper>
      <Form />
      <ProjectInMindBanner />
    </div>
  );
};

export default Services;
