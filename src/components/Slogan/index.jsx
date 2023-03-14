import React from "react";
import ImgContent from "../../assets/images/GaoContent.jpg";
import "animate.css";

function Slogan() {
  return (
    <section className="text-36 relative my-14 font-extrabold md:my-20 md:grid md:grid-cols-3 md:items-center md:text-48 animate__animated animate__backInRight">
      <div className="text-center md:col-span-1 md:col-start-2">
        <p>
          Hello{" "}
          <span className="text-indigo-700 dark:text-indigo-300">Friend</span>
        </p>
        <button className="text-white text-20 px-6 py-[6px] font-bold mt-[27px] bg-indigo-800 rounded-lg shadow-lg hover:shadow-indigo-500/50 hover:bg-indigo-700 transition-all duration-300 md:text-24 md:px-8 md:py-[8px]">
          Start
        </button>
      </div>
      <div className="mt-[100px]">
        <img
          src={ImgContent}
          alt="image-gao"
          className="md:w-[30%] md:absolute md:right-[3rem] md:top-[2rem] rounded-full shadow-md shadow-indigo-900/70 transition-all ease-in hover:scale-75 duration-200"
        />
      </div>
    </section>
  );
}

export default Slogan;
