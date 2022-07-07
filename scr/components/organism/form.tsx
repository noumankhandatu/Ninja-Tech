import React from "react";
import Wrapper from "./wrapper";
import Input from "../atom/input";
import TextArea from "../atom/textarea";

const Form = () => {
  return (
    <Wrapper contained={true} className="pb-20 pt-16">
      <p className="text-5xl font-bolder pl-52 pr-52 text-center pb-20">
        Submit your project details and get FREE estimation
      </p>
      <div className="grid grid-cols-3 pl-20 pr-20">
        <Input label="YOUR NAME" />
        <Input label="PHONE NUMBER" />
        <Input label="YOUR EMAIL" />
      </div>
      <TextArea />
       <div className="flex pt-10 justify-center">
       <button className="bg-orange-500 pl-16 pr-16 pt-2 pb-2 font-bolder text-white rounded-full ">Submit Now</button>
       </div>
    </Wrapper>
  );
};

export default Form;
