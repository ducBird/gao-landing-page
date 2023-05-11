import React, { useEffect } from "react";
import FacebookAvatar from "../../../assets/images/AvatarFacebook.jpg";
import Post1 from "../../../assets/images/Post1.jpg";
import "./posts.css";

function Posts() {
  // const FB_ACCESS_TOKEN =
  //   "EAAC38QTQiFkBAECJ9qgKBcOd04ccmQjR2qGyybXWiudBgy8A2B9zgpmtV0sFzsOBKSM2XwWJvOcIZAhp6r8QV2tqUo0krPQvcI9nrMjuyIinFLpveW2xnBAls5QMC7dsZCCipXSVjQZBTANKHA6u4KzBe4wmcTgeKXvJBlW9hTcicp8ScSZB7SFDkHcaiABKnnGBC1ZANsxKS6SVuQX9DZCegweq5kNrAZD";
  // const PAGE_ID = "106014305786410"; // ID of page "https://www.facebook.com/settings?tab=business_tools&ref=settings"
  // useEffect(() => {
  //   fetch(
  //     `https://graph.facebook.com/${PAGE_ID}/accounts?access_token=${FB_ACCESS_TOKEN}`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // });
  return (
    <>
      <div className="mx-auto max-w-7xl mt-32 md:mt-52">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article className="flex max-w-xl flex-col items-start justify-between dark:bg-black/40 bg-white/50 rounded-xl px-5 py-7 md:p-10">
            <img
              src={Post1}
              className="mb-3 object-cover h-[150px] w-full rounded-xl md:h-[200px] md:w-full"
              alt=""
            />
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
              <h3 className="mt-3 text-lg font-semibold leading-6 dark:text-white dark:group-hover:text-white/70 text-gray-900 group-hover:text-gray-600">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Lâu qué hông đăng gì hông biết còn có ai nhớ tui hum 🐶
                </a>
              </h3>
              <p className="mt-5 text-sm leading-6 text-gray-600 clamp-3">
                {/* Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed
                exercitationem placeat consectetur nulla deserunt vel. Iusto
                corrupti dicta. */}
              </p>
            </div>
            <div className="relative mt-8 flex items-center justify-between w-full">
              <div className="flex items-center gap-x-4">
                <img
                  src={FacebookAvatar}
                  alt="avatar"
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      GẸO
                    </a>
                  </p>
                  {/* <p className="">Icon</p> */}
                </div>
              </div>
              <button className="group relative overflow-hidden rounded-lg shadow px-3 py-2 w-28 md:p-2 md:w-32 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 font-medium">
                <div className="absolute inset-0 w-0 transition-all duration-[250ms] ease-out group-hover:w-full bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg"></div>
                <span className="relative text-white group-hover:text-black">
                  Xem thêm
                </span>
              </button>
            </div>
          </article>

          <article className="flex max-w-xl flex-col items-start justify-between bg-white rounded-xl px-5 py-7 md:p-10">
            <img
              src={Post1}
              className="mb-3 object-cover h-[150px] w-full rounded-xl md:h-[200px] md:w-full"
              alt=""
            />
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
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Lâu qué hông đăng gì hông biết còn có ai nhớ tui hum 🐶
                </a>
              </h3>
              <p className="mt-5 text-sm leading-6 text-gray-600 clamp-3"></p>
            </div>
            <div className="relative mt-8 flex items-center justify-between w-full">
              <div className="flex items-center gap-x-4">
                <img
                  src={FacebookAvatar}
                  alt="avatar"
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      GẸO
                    </a>
                  </p>
                  {/* <p className="">Icon</p> */}
                </div>
              </div>
              <button className="group relative overflow-hidden rounded-lg shadow px-3 py-2 w-28 md:p-2 md:w-32 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 font-medium">
                <div className="absolute inset-0 w-0 transition-all duration-[250ms] ease-out group-hover:w-full bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg"></div>
                <span className="relative text-white group-hover:text-black">
                  Xem thêm
                </span>
              </button>
            </div>
          </article>

          <article className="flex max-w-xl flex-col items-start justify-between bg-white rounded-xl px-5 py-7 md:p-10">
            <img
              src={Post1}
              className="mb-3 object-cover h-[150px] w-full rounded-xl md:h-[200px] md:w-full"
              alt=""
            />
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
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Lâu qué hông đăng gì hông biết còn có ai nhớ tui hum 🐶
                </a>
              </h3>
              <p className="mt-5 text-sm leading-6 text-gray-600 clamp-3"></p>
            </div>
            <div className="relative mt-8 flex items-center justify-between w-full">
              <div className="flex items-center gap-x-4">
                <img
                  src={FacebookAvatar}
                  alt="avatar"
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      GẸO
                    </a>
                  </p>
                  {/* <p className="">Icon</p> */}
                </div>
              </div>
              <button className="group relative overflow-hidden rounded-lg shadow px-3 py-2 w-28 md:p-2 md:w-32 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 font-medium">
                <div className="absolute inset-0 w-0 transition-all duration-[250ms] ease-out group-hover:w-full bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg"></div>
                <span className="relative text-white group-hover:text-black">
                  Xem thêm
                </span>
              </button>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Posts;
