type InputProps = {
  label?: string;
};
const Input = ({ label }: InputProps) => {
  return (
    <div className=" pb-10">
      <form>
        <div>
          <label htmlFor="first">{label} *</label>
        </div>
        <div className="pt-4">
          <input
            style={{ width: "352px" }}
            type="text"
            id="first"
            className="bg-blue-50 border border-gray-500 rounded h-9"
            name="first"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Input;
