import React from 'react';
import './FlippingCardsSection.css'; // Import the CSS file
import handShakeIcon from "./../../assets/cards_icons/handshake.png"
import focusIcon from "./../../assets/cards_icons/focus.png"
import loadingIcon from "./../../assets/cards_icons/loading.png";
import globalIcon from "./../../assets/cards_icons/global.png";
import effectiveIcon from "./../../assets/cards_icons/effective.png"

const FlippingCardsSection = () => {


  // home page card data
  const cardData = [
    {
      id: 1,
      icon: "/images/cards_icons/handshake.png",
      title: "RELATIONSHIP DRIVEN",
      frontContent: "Pushing the boundaries of technology.",

      backContent: "We build positive, long-term relationships with our clients, partners, vendors, and colleagues."
    },
    {
      id: 2,
      icon: "/images/cards_icons/focus.png",
      title: "DETAIL FOCUSED",
      frontContent: "Honesty and transparency in all we do.",

      backContent: "We stay on top of every detail in our business through tech and data."
    },
    {
      id: 3,
      icon: "/images/cards_icons/global.png",
      title: "GLOBAL REACH",
      frontContent: "Working together for success.",
      backContent: "Here, there, everywhere. We have the tools and connections to make projects happen."
    },
    {
      id: 4,
      icon: "/images/cards_icons/loading.png",
      title: "EFFICIENT DESIGN",
      frontContent: "Environmental responsibility is our priority.",
      backContent: "Efficiency is the name of the game. Our focus on lean processes makes managing projects easier."
    },
    {
      id: 5,

      title: "COST EFFECTIVE",
      icon: "/images/cards_icons/effective.png",
      frontContent: "Aiming for the highest standards.",
      backContent: "We are passionate about excellence and doing our work right the first time. We listen, learn, and seek out the best ideas."
    },
  ];

  return (
    <section className="py-10 md:py-10 lg:py-10">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-blue-900 dark:text-white sm:text-3xl">
            OUR VALUES
          </h2>
          <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mt-4">
            GR2 ENGINEERING’S UNIQUE APPROACH
          </h3>
        </div>
        <div className="flex flex-wrap grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6  justify-center">
          {cardData.map((card) => (
            <div key={card.id} className="card ">
              <div className="flex flex-col justify-center items-center gap-4 ">
                <img src={card.icon} alt={card.title} className="card__image object-contain w-20" />
                <h3 className='card-title1 '>{card.title}</h3>
              </div>
              <div className="card__content">
                <h3 className="card__title text-white">{card.title}</h3>
                <p className=" card__description text-white">{card.backContent}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FlippingCardsSection;
