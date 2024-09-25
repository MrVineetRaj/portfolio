import React from "react";

const FormField = ({
  title,
  handleTextChange,
  label,
  type,
}: {
  title: string;
  handleTextChange: (e: any) => void;
  label: string;
  type: string;
}) => {
  return (
    <div className="w-[280px] sm:w-[340px] mt-6 relative ">
      {type === "textArea" ? (
        <span className=" w-full ">
          <textarea
            className="bg-transparent border-violet-300 outline-none focus:border-violet-600 border  rounded-md valid:border-violet-600 transition-all duration-200 peer w-full px-4 py-2"
            required
            name={title}
            onChange={(e) => handleTextChange(e)}
          />
          <label
            htmlFor={title}
            className="absolute top-2 left-2 text-gray-400 peer-focus:text-violet-300 peer-focus:-top-5 peer-valid:text-violet-300 peer-valid:-top-5  transition-all duration-200"
          >
            {label}
          </label>
        </span>
      ) : (
        <span className="w-full">
          <input
            type={type}
            className="bg-transparent border-violet-300 outline-none focus:border-violet-600 border  rounded-md valid:border-violet-600 transition-all duration-200 peer w-full px-4 py-2"
            required
            name={title}
            onChange={(e) => handleTextChange(e)}
          />
          <label
            htmlFor={title}
            className="absolute top-2 left-2 text-gray-400 peer-focus:text-violet-300 peer-focus:-top-5 peer-valid:text-violet-300 peer-valid:-top-5  transition-all duration-200"
          >
            {label}
          </label>
        </span>
      )}
    </div>
  );
};

export default FormField;
