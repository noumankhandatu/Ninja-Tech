const TextArea = () => {
  return (
    <div className="pl-20 pr-20">
      <label className="block mb-2 text-[16px] font-medium text-[#2A2A2A]">MESSAGE *</label>
      <textarea
        id="message"
        className="block p-2.5 w-full bg-blue-50 border border-[#B8C8CF] outline-0  pl-1 pr-1 rounded "
        placeholder="Your message..."
      ></textarea>
    </div>
  );
};

export default TextArea;
