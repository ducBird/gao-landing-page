import React from "react";
import Gao2_Img from "../../assets/images/Gao2.jpg";

function Introduction() {
  return (
    <>
      <div className="mt-24 md:mt-52 text-center mb-16">
        <h2 className="text-26 md:text-4xl font-bold">
          Ở đây lưu giữ những khoảnh khắc đáng nhớ 🥰
        </h2>
      </div>
      <div className="grid md:grid-cols-4 gap-16">
        <div
          className="relative aspect-square group flex items-center justify-center rounded-full shadow-md shadow-black/50 bg-indigo-800/40"
          data-aos="fade-left"
        >
          <div className="absolute bottom-0 w-full h-1/2 rounded-b-full bg-black/50 text-center">
            <p
              className="mt-10 text-white"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <img
            src={Gao2_Img}
            alt="GaoImage"
            className="object-cover w-[90%] h-[90%] rounded-full"
          />
        </div>
        <div
          className="relative aspect-square group flex items-center justify-center rounded-full shadow-md shadow-black/50 bg-indigo-800/40"
          data-aos="fade-right"
        >
          <div className="absolute bottom-0 w-full h-1/2 rounded-b-full bg-black/50 text-center">
            <p
              className="mt-10 text-white"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <img
            src={Gao2_Img}
            alt="GaoImage"
            className="object-cover w-[90%] h-[90%] rounded-full"
          />
        </div>
        <div
          className="relative aspect-square group flex items-center justify-center rounded-full shadow-md shadow-black/50 bg-indigo-800/40"
          data-aos="fade-left"
        >
          <div className="absolute bottom-0 w-full h-1/2 rounded-b-full bg-black/50 text-center">
            <p
              className="mt-10 text-white"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <img
            src={Gao2_Img}
            alt="GaoImage"
            className="object-cover w-[90%] h-[90%] rounded-full"
          />
        </div>
        <div
          className="relative aspect-square group flex items-center justify-center rounded-full shadow-md shadow-black/50 bg-indigo-800/40"
          data-aos="fade-right"
        >
          <div className="absolute bottom-0 w-full h-1/2 rounded-b-full bg-black/50 text-center">
            <p
              className="mt-10 text-white"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <img
            src={Gao2_Img}
            alt="GaoImage"
            className="object-cover w-[90%] h-[90%] rounded-full"
          />
        </div>
      </div>
    </>
  );
}

export default Introduction;
