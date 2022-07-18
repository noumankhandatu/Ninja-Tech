import React from "react";
import Wrapper from "./wrapper";
import Input from "../atom/input";
import TextArea from "../atom/textarea";
import Button from "../molecule/button";

const Form = () => {
  return (
    <Wrapper contained={true} className="pb-20 pt-16">
      <p className="lg:text-[42px] text-[32px]  font-normal text-center pb-20">
        Submit your project details and get FREE estimation
      </p>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:pl-20 lg:gap-10 lg:pr-20 p-2">
        <Input label="YOUR NAME" />
        <Input label="PHONE NUMBER" />
        <Input label="YOUR EMAIL" />
      </div>
      <TextArea />
      <div className="flex pt-10 justify-center">
        <Button path="/" variant="secondary">
          Submit Now
        </Button>
      </div>
    </Wrapper>
  );
};

export default Form;
