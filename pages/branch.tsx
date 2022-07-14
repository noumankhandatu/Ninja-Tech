import Wrapper from "../scr/components/organism/wrapper";
import { ProjectInMindBanner } from "../scr/components/organism/banners";
import Form from "../scr/components/organism/form";
import GreatPortfolio from "../scr/components/organism/greatPortfolio";
import { PortFolioServicePage } from "../scr/components/atom/testingArrays";
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
      {/* creator div */}
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
      {/* portfolio */}
      <Wrapper contained>
        <GreatPortfolio data={PortFolioServicePage} />
      </Wrapper>
      <Form />
      <ProjectInMindBanner />
    </div>
  );
};

export default Branch;
