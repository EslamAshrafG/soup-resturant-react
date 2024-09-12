/* eslint-disable react/prop-types */
import PageTitle from "../../components/PageTitle";
import "../../index.css";
import { useState } from "react";

const faqData = [
  {
    question: "What types of cuisine does your restaurant offer?",
    answer:
      "Our restaurant specializes in contemporary American cuisine with a focus on locally-sourced ingredients. We offer a diverse menu including appetizers, entrees, and desserts, with options ranging from seafood and steaks to vegetarian and vegan dishes.",
    id: 1,
  },
  {
    question: "Do you accommodate dietary restrictions?",
    answer:
      "Yes, we cater to various dietary needs. We offer gluten-free, vegetarian, vegan, and dairy-free options. Please inform your server about any allergies or dietary requirements when ordering, and we'll be happy to accommodate you.",
    id: 2,
  },
  {
    question: "What are your restaurant's opening hours?",
    answer:
      "We are open for dinner Tuesday through Sunday from 5:00 PM to 10:00 PM. We also offer lunch service on Fridays, Saturdays, and Sundays from 11:30 AM to 2:30 PM. We are closed on Mondays.",
    id: 3,
  },
  {
    question: "Does your restaurant take reservations?",
    answer:
      "Yes, we strongly recommend reservations, especially for dinner service. You can make a reservation through our website, by calling us at (555) 987-6543, or using popular restaurant booking apps.",
    id: 4,
  },
  {
    question: "Is there parking available at your restaurant?",
    answer:
      "We offer valet parking service during dinner hours. There is also a public parking garage one block away, and limited street parking in the surrounding area. We recommend allowing extra time for parking, especially on weekends.",
    id: 5,
  },
  {
    question: "Does your restaurant offer takeout or delivery services?",
    answer:
      "Yes, we offer both takeout and delivery options. You can place a takeout order by calling the restaurant directly or through our website. For delivery, we partner with several food delivery services. Please note that our full menu may not be available for takeout or delivery.",
    id: 6,
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div>
      <PageTitle
        titleText="FAQ"
        subtitle="Some informations about our restaurant"
        bgColor=""
        size={70}
      />
      <div className="flex flex-col gap-4 container mx-auto sm:px-10 items-center my-8 ">
        <div className="flex flex-col gap-4 bg-gray-200 p-10 rounded-md shadow-md w-11/12">
          {faqData.map((item) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer, activeIndex, setActiveIndex, id }) {
  const isOpen = activeIndex === id;
  return (
    <div
      className="flex flex-col gap-4 cursor-pointer select-none border-b-2 border-gray-300 pb-4"
      onClick={() => setActiveIndex(activeIndex === id ? null : id)}
    >
      <div className="flex justify-between items-center gap-4">
        <h3 className="sm:text-xl text-md font-bold">{question}</h3>
        <button className="text-4xl rounded-[50%] text-darkColor">
          {isOpen ? "-" : "+"}
        </button>
      </div>
      <p className="text-base text-gray-500">{isOpen ? answer : ""}</p>
    </div>
  );
}
