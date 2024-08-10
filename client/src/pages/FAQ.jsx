import React, { useState } from 'react';

const faqData = [
  {
    question: "What services do you offer?",
    answer: "We offer a variety of real estate services including buying, selling, and renting properties. Our team also provides property management and investment consulting services."
  },
  {
    question: "How can I schedule a property viewing?",
    answer: "To schedule a property viewing, simply contact us through our website or call our office. Our agents will arrange a convenient time for you to visit the property."
  },
  {
    question: "What is the process for buying a home?",
    answer: "The process for buying a home involves several steps, including finding a property, making an offer, securing financing, and closing the deal. Our agents will guide you through each step to ensure a smooth transaction."
  },
  {
    question: "Do you offer property management services?",
    answer: "Yes, we offer comprehensive property management services including tenant screening, rent collection, and property maintenance. We take care of everything so you can enjoy a hassle-free experience."
  },
  {
    question: "How do I list my property for sale?",
    answer: "To list your property for sale, contact us to schedule a consultation. We'll evaluate your property, discuss pricing, and create a customized marketing plan to attract potential buyers."
  },
  {
    question: "What areas do you serve?",
    answer: "We primarily serve the Greater Toronto Area, including Mississauga, Brampton, and surrounding regions. We also have listings and services available in other parts of Ontario."
  },
  {
    question: "Can you help with mortgage financing?",
    answer: "Yes, we work with several trusted mortgage brokers who can help you find the best financing options for your needs. Whether you're a first-time buyer or looking to refinance, we can assist you."
  },
  {
    question: "How can I contact you for more information?",
    answer: "You can contact us via phone, email, or through our website’s contact form. Our team is always ready to answer your questions and provide the assistance you need."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-cyan-800 mb-8">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white border border-gray-300 rounded-md shadow-sm">
            <div
              className="p-4 cursor-pointer flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="text-xl font-semibold">{faq.question}</h2>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="p-4 bg-gray-50">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
