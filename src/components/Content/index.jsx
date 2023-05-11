import React, { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./content.css";

function Content() {
  const customer = useSpring({ customers: 178, from: { customers: 0 } });
  const card = useSpring({ cards: 27, from: { cards: 0 } });
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      AOS.init({ duration: 2000, offset: 0 });
    }
  }, [inView]);

  return (
    <section className="md:flex md:flex-row md:items-center mt-20">
      <div
        ref={ref}
        className={`ml-[70px] mr-[54px] text-bold flex flex-col items-center bg-gradient-to-b from-indigo-300/20 to-transparent shadow-md rounded-[24px] md:w-[30%] md:px-12 md:ml-36 ${
          inView ? `animate__animated animate__rubberBand` : ``
        }`}
      >
        <div className="mt-16 gap-8 flex items-start md:px-10">
          <FaUser size={"24px"} className="mt-[12px]" />
          <div className="text-26">
            <animated.div>
              {customer.customers.to((val) => Math.floor(val))}
            </animated.div>
            <p className="text-13 font-semibold mb-[36px] md:text-16">
              Followers
            </p>
          </div>
        </div>
        <div className="gap-8 flex items-start mb-16 md:px-10">
          <BsFillCreditCardFill size={"24px"} className="mt-[12px]" />
          <div className="text-26">
            <animated.div>
              {card.cards.to((val) => Math.floor(val))}
            </animated.div>
            <p className="text-13 font-semibold md:text-16">Following</p>
          </div>
        </div>
      </div>

      <div
        className={`relative mt-[70px] md:mt-0 flex md:w-[20%] md:px-12 md:ml-6`}
      >
        <a href="#scroll-target" className="scroll-arrow animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M10 14.586L3.707 8.293a1 1 0 0 1 1.414-1.414L10 11.758l4.879-4.879a1 1 0 0 1 1.414 1.414L10 14.586z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
      <div id="scroll-target"></div>
      <div className="md:w-[50%]"></div>
    </section>
  );
}

export default Content;
