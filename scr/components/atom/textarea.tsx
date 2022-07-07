const TextArea = () => {
  return (
    <div className="pl-20 pr-20">
      <label className="block mb-2">MESSAGE *</label>
      <textarea
        id="message"
        className="block p-2.5 w-full bg-blue-50 border border-gray-500 rounded "
        placeholder="Your message..."
      ></textarea>
    </div>
  );
};

export default TextArea;
