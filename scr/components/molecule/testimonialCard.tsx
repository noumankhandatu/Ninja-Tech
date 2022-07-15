import React from "react";
import AppFont from "../atom/AppFont";

const TestimonialCard = () => {
  return (
    <div className="bg-white shadow mb-20 mr-4 p-14 rounded ">
      <div className="flex items-center ">
        <div>
          <img
            src="https://ninjatech.agency/wp-content/themes/ninja/assets/images/testi-user-2.png"
            alt=""
          />
        </div>
        <div className="ml-4">
          <p className="text-[20px font-medium]">Tupac Shakur</p>
          <AppFont className="text-App-orange">Helo</AppFont>
        </div>
      </div>
      <AppFont className="mt-8 leading-loose ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Odio dignissimos eos eum
        nostrum cum reprehenderit sapiente sit ipsam iste cumque. Aliquid,
        magni? jasdaslj
      </AppFont>
    </div>
  );
};

export default TestimonialCard;
