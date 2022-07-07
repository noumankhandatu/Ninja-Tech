const NumbersCard = () => {
  return (
    <div className="p-[40px] rounded-[30px] shadow-md bg-white text-black">
      <div>
        <div className="flex items-center ">
          <p className="text-3xl font-bolder text-center p-5 h-[75px] w-[75px] rounded-full bg-pink-200">
            1
          </p>
          <p className="text-3xl ml-3 font-bolder">Insight :</p>
        </div>
        <p className="pt-8 pb-5">
          Once we are ready to start the project we will take a brief insight
          into the requirement you shared with us and get back to you with some
          queries and suggestions.
        </p>
      </div>
    </div>
  );
};

export default NumbersCard;
