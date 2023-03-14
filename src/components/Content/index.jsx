import React from "react";
import { FaUser } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import { useSpring, animated } from "react-spring";

function Content() {
  const customer = useSpring({ customers: 10245, from: { customers: 0 } });
  const card = useSpring({ cards: 10245, from: { cards: 0 } });
  return (
    <section className="md:flex md:flex-row md:items-center">
      <div className="ml-[70px] mr-[54px] text-bold flex flex-col items-center bg-gradient-to-b from-indigo-300/20 to-transparent shadow-md rounded-[24px] md:w-[30%] animate__animated animate__rubberBand">
        <div className="mt-16 gap-8 flex items-start md:px-10">
          <FaUser size={"24px"} className="mt-[12px]" />
          <div className="text-26">
            <animated.div>
              {customer.customers.to((val) => Math.floor(val))}
            </animated.div>
            <p className="text-13 font-semibold mb-[36px] md:text-16">
              Customer
            </p>
          </div>
        </div>
        <div className="gap-8 flex items-start mb-16 md:px-10">
          <BsFillCreditCardFill size={"24px"} className="mt-[12px]" />
          <div className="text-26">
            <animated.div>
              {card.cards.to((val) => Math.floor(val))}
            </animated.div>
            <p className="text-13 font-semibold md:text-16">Card Issued</p>
          </div>
        </div>
      </div>
      <div className="text-13 font-semibold flex flex-col w-[100%] mt-[90px] md:mt-0 md:z-10 md:text-16">
        <div className="flex gap-8 ml-[70px] md:mx-0 mr-[29px] items-center mb-[51px]">
          <BsFillCreditCardFill size={"24px"} />
          <p>Card reports sent to your phone every weeks</p>
        </div>
        <div className="flex gap-8 ml-[70px] md:mx-0 mr-[29px] items-center mb-[51px]">
          <BsFillCreditCardFill size={"24px"} />
          <p>Card reports sent to your phone every weeks</p>
        </div>
        <div className="flex gap-8 ml-[70px] md:mx-0 mr-[29px] items-center mb-[51px] md:mb-0">
          <BsFillCreditCardFill size={"24px"} />
          <p>Card reports sent to your phone every weeks</p>
        </div>
      </div>
    </section>
  );
}

export default Content;
