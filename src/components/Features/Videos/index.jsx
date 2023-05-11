import React, { useEffect } from "react";
import "./videos.css";
import { Carousel } from "flowbite-react";
import "flowbite";
import AvatarFB from "../../../assets/images/AvatarFacebook.jpg";

function Videos() {
  // tailwindcomponents.com/component/nft-card-horizon-ui-tailwind
  // https://tailwindcomponents.com/component/profile-card-13
  // https://tailwindui.com/components/marketing/sections/blog-sections
  return (
    <>
      {/* <div class="pt-4 pb-8 px-8 bg-black/25 shadow-lg rounded-lg my-20 md:w-[70%] relative">
        <div class="flex justify-center md:justify-end -mt-16 md:-mt-28">
          <img
            class="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full border-2 border-indigo-500"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          />
        </div>
        <Slider {...settings}>
          <iframe
            className="object-cover md:h-[530px]"
            src="https://drive.google.com/file/d/1HQNWVPc4nbZOlJjeUxx--tj1mN0RPfKj/preview"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="object-cover md:h-[530px]"
            src="https://drive.google.com/file/d/1HQNWVPc4nbZOlJjeUxx--tj1mN0RPfKj/preview"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Slider>
        <h2 class="text-gray-800 text-3xl font-semibold absolute top-[105%] bg-black">
          Design Tools
        </h2>
      </div> */}

      <div className="mt-40 mx-auto md:mx-10 flex justify-center">
        <div
          id="controls-carousel"
          class="relative w-full md:w-[80%]"
          data-carousel="static"
        >
          <div class="relative h-[600px] overflow-hidden rounded-lg md:h-[1000px]">
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <iframe
                className="object-cover w-full h-56 md:h-[530px]"
                src="https://drive.google.com/file/d/1HQNWVPc4nbZOlJjeUxx--tj1mN0RPfKj/preview"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div
              class="hidden duration-700 ease-in-out"
              data-carousel-item="active"
            >
              <div class="pt-4 pb-8 px-8 bg-black/25 shadow-lg rounded-lg my-20 md:my-32 md:w-full relative">
                <div class="flex justify-center md:justify-end -mt-16 md:-mt-28">
                  <img
                    class="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full border-2 border-indigo-500"
                    src={AvatarFB}
                  />
                </div>
                <iframe
                  className="object-cover w-full h-44 md:h-[530px] rounded-lg"
                  src="https://drive.google.com/file/d/1HQNWVPc4nbZOlJjeUxx--tj1mN0RPfKj/preview"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime="30-03-2023" className="text-gray-500">
                    30-03-2023
                  </time>
                  {/* <a
                  href="#"
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  Marketing
                </a> */}
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 dark:text-white dark:group-hover:text-white/70 text-white/80 group-hover:text-gray-600">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Mặt trời sắp trở mình đi ngủ Gạo thì khoác lên mình vài
                      tia nắng cuối ngày thẩn thơ lè lưỡi thở như bò không thèm
                      nhìn mấy bạn chuồn chuồn luôn á 🤗 Tiếng máy xuồng ở quê
                      không lẫn đi đâu được, nghe êm tai quá cô chú ưiii 😁
                    </a>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600 clamp-3">
                    {/* Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed
                exercitationem placeat consectetur nulla deserunt vel. Iusto
                corrupti dicta. */}
                  </p>
                </div>
              </div>
            </div>

            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>

            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>

            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>

          <button
            type="button"
            class="absolute top-[300px] md:top-[500px] left-[-25px] z-30 flex items-center justify-center px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-600/70 dark:bg-rose-600/70 group-hover:bg-purple-600 dark:group-hover:bg-rose-600 group-focus:ring-4 group-focus:ring-purple-800 dark:group-focus:ring-rose-800 group-focus:outline-none">
              <svg
                aria-hidden="true"
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            class="absolute top-[300px] md:top-[500px] right-[-25px] z-30 flex items-center justify-center px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-600/70 dark:bg-rose-600/70 group-hover:bg-purple-600 dark:group-hover:bg-rose-600 group-focus:ring-4 group-focus:ring-purple-800 dark:group-focus:ring-rose-800 group-focus:outline-none">
              <svg
                aria-hidden="true"
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Videos;
