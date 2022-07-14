import Wrapper from "../scr/components/organism/wrapper";
import { ProjectInMindBanner } from "../scr/components/organism/banners";
import Form from "../scr/components/organism/form";
import GreatPortfolio from "../scr/components/organism/greatPortfolio";
import { PortFolioServicePage } from "../scr/components/atom/testingArrays";
// import BranchCard from "../src/components/molecules/brancdCard.tsx";
import BrandCard from "../scr/components/molecule/brandCard";
const Branch = () => {
  return (
    <div>
      <div className="bg-[#FCF1EF] pt-20 pb-40">
        <Wrapper contained>
          <div className="grid grid-cols-2 gap-20 ">
            <div>
              <div>
                <p className="text-[60px] font-light text-[#2A2A2A]">
                  We're Better{" "}
                </p>
                <p className="text-[60px] font-light	 text-[#2A2A2A]">
                  Together
                </p>
              </div>
              <p className="mt-7 text-[18px]  text-[#2A2A2A] leading-8	">
                NinjaTech always believes in the fact that you can succeed best
                and speediest by helping other people to succeed. NinjaTech is
                here to be the best acquaintance of you to fulfill your dream
                project goal.
              </p>
            </div>
            <div>
              <img
                className="w-[339px] h-[418px]"
                src="https://ninjatech.agency/wp-content/uploads/2022/06/brand-image-1.png"
              />
            </div>
          </div>
        </Wrapper>
      </div>
      {/* creator div =>*/}
      <div className="pt-20 pb-40">
        <Wrapper contained>
          <div className="grid grid-cols-2 gap-20 items-center">
            <div>
              <img
                className="w-[685px] h-[500px]"
                src="https://ninjatech.agency/wp-content/uploads/2022/06/agency.png"
              />
            </div>
            <div>
              <div>
                <p className="text-[42px] font-light text-[#2A2A2A]">
                  We are A Creative Agency with a passion for design
                </p>
              </div>
              <p className="mt-2 text-[18px]  text-[#2A2A2A] leading-8	">
                The team of NinjaTech is always passionate about creativity,
                every employee always comes up with many creative and engaging
                ideas for the suggestions for each client. We love to build an
                attractive look for your website, app, or software. We are very
                fascinated by the design of your project.
              </p>
              <p className="mt-2 text-[18px]  text-[#2A2A2A] leading-8	">
                Our expert designers and developers will always be mindful to
                build a flawless, attractive, and engaging website for your
                business.
              </p>
            </div>
          </div>
        </Wrapper>
      </div>
      {/* Branch => */}
      <div className="bg-[#F5F5F5] pt-20 pb-40">
        <Wrapper contained>
          <p className="font-light text-[42px] text-center">
            We help Brands with
          </p>
          <p className="text-[18px] text-center mt-4">
            We are here with our services which will help to enhance your brand
            identity and make your business more <br /> profitable and
            captivating.
          </p>
          {/* Cards Rendered */}
          <div className="grid grid-cols-[1.6fr,1fr] gap-10">
            <BrandCard
              btnVariant="primary"
              title={"Software Development:"}
              description={
                "We foster custom programming, commonly for set up organizations hoping to work on their inside framework or to take software items to advertise."
              }
              className={"bg-white"}
            />
            <BrandCard
              btnVariant="primary"
              flexer={true}
              btnClass="border border-black"
              title={"Web-App Development:"}
              description={
                "Our web application development group has an abundance of full-stack skills in conveying answers for financed new companies and venture organizations."
              }
              className={"bg-App-orange text-center text-white"}
            />
          </div>
          {/* second grid of cards */}
          <div className="grid grid-cols-[1fr,1fr] gap-10">
            <BrandCard
              btnVariant="contained"
              flexer={true}
              btnClass=" filled"
              title={"Mobile App Development:"}
              description={
                "We have a broad ability in creating customized versatile mobile applications for a large number of enterprises and organizations."
              }
              className={"bg-[#091037] text-center text-white"}
            />
            <BrandCard
             btnVariant="contained"
              flexer={true}
              btnClass=" filled"
              title={"UI/UX Design"}
              description={
                "Our Design and UX group make consistent, client-driven plans that feature your image and supercharge your profit. We'll cooperate to make the ideal plan that meets your brief, yet ensures your site remains simple to oversee.                "
              }
              className={"text-center text-white"}
              bgImg="https://ninjatech.agency/wp-content/themes/ninja/assets/images/brand/nature.png"
            />
          </div>
        </Wrapper>
      </div>
      {/* portfolio =>*/}
      <Wrapper contained>
        <GreatPortfolio data={PortFolioServicePage} />
      </Wrapper>
      <Form />
      <ProjectInMindBanner />
    </div>
  );
};

export default Branch;
