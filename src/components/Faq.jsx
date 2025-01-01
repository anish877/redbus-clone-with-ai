import React, { useState } from 'react';

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (categoryId, questionId) => {
    setOpenQuestions(prev => ({
      ...prev,
      [`${categoryId}-${questionId}`]: !prev[`${categoryId}-${questionId}`]
    }));
  };

  const isQuestionOpen = (categoryId, questionId) => {
    return openQuestions[`${categoryId}-${questionId}`] || false;
  };
  
  const faqData = {
    general: [
      {
        question: "Can I track the location of my booked bus online?",
        answer: "Yes, you can track your bus online by using our bus tracking app feature called Track My Bus. This feature allows passengers and their families to track the live bus tracking location. You may follow your bus on a map and use the information to plan your trip to the boarding point and to get off at the correct stop. Family and friends may also check the bus position to plan pick-ups and ensure your safety."
      },
      {
        question: "What are the advantages of purchasing a bus ticket with redBus?",
        answer: "There are many advantages to purchasing online bus tickets with redBus. redBus is India's most trusted bus ticket company, where you can book any type of private or Government owned buses. redBus allows you to find the different types of buses, choose the preferred bus seats, and your nearest boarding and dropping points. You can also filter the buses based on timings like morning, evening bus etc."
      },
      {
        question: "Why book bus tickets online on redBus?",
        answer: "Booking bus tickets online on redBus offers numerous benefits including 24/7 booking availability, secure payment options, instant confirmation, and the ability to compare different bus services and prices. You can also access user reviews, get instant refunds, and enjoy exclusive online discounts."
      },
      {
        question: "Do I need to create an account to book tickets?",
        answer: "While it's not mandatory to create an account for booking tickets, having a redBus account offers several benefits like faster checkout, easy access to booking history, instant refunds to wallet, and exclusive member discounts. You can create an account for free using your email or phone number."
      },
      {
        question: "What languages is redBus available in?",
        answer: "redBus is available in multiple regional languages including English, Hindi, Tamil, Telugu, Malayalam, Kannada, Bengali, and Marathi. You can easily switch between languages using the language selector in the app or website header."
      },
      {
        question: "Is redBus available in other countries?",
        answer: "Yes, redBus operates in several countries including India, Singapore, Malaysia, Indonesia, Peru, and Colombia. Each country has its own dedicated website and app with localized features and payment options."
      },
      {
        question: "How can I contact redBus customer support?",
        answer: "redBus customer support is available 24/7 through multiple channels. You can reach us via phone, email, chat support in the app/website, or social media. For immediate assistance, use our chat support or toll-free number."
      }
    ],
    ticket: [
        {
          question: "How do I book a bus ticket on redBus?",
          answer: "Booking a bus ticket on redBus is simple. Enter your source, destination, and travel date, browse available buses, select your preferred seat, choose boarding/dropping points, fill in passenger details, and make the payment. You'll receive an instant confirmation via email and SMS."
        },
        {
          question: "Can I modify my bus ticket after booking?",
          answer: "Yes, you can modify your ticket details up to 24 hours before departure. This includes changing passenger names and contact information. However, route changes are not permitted and would require cancellation and new booking."
        },
        {
          question: "What documents do I need while traveling?",
          answer: "You need to carry a valid government-issued photo ID (Aadhaar Card, Driving License, Voter ID, or Passport) and your ticket confirmation (digital or printed) while traveling. For certain routes, additional documentation may be required."
        },
        {
          question: "How can I download my ticket?",
          answer: "You can download your ticket from the 'My Bookings' section in your redBus account or from the confirmation email/SMS. The ticket can be downloaded as a PDF and either printed or shown digitally during travel."
        },
        {
          question: "Can I book tickets for a group?",
          answer: "Yes, you can book up to 6 seats in a single booking. For larger groups, you can make multiple bookings or contact our customer support for group booking assistance. Some operators offer special rates for group bookings."
        },
        {
          question: "What happens if my bus is delayed?",
          answer: "In case of delays, you'll receive notifications via SMS and email. For significant delays, you may be eligible for compensation under our delay protection policy. You can track your bus location in real-time using our app."
        },
        {
          question: "Can I choose my preferred seat?",
          answer: "Yes, redBus provides an interactive seat layout where you can view available seats and select your preferred seat. Seat prices may vary based on location (window/aisle) and type (sleeper/seater)."
        }
      ],
      payment: [
        {
          question: "What payment methods are accepted on redBus?",
          answer: "redBus accepts various payment methods including Credit/Debit cards, Net Banking, UPI (Google Pay, PhonePe, BHIM), mobile wallets, and redBus wallet. All transactions are secured with industry-standard encryption."
        },
        {
          question: "Is it safe to make payments on redBus?",
          answer: "Yes, all payments on redBus are completely secure. We use industry-standard SSL encryption and partner with trusted payment gateways to ensure your financial information is protected at all times."
        },
        {
          question: "What should I do if my payment fails?",
          answer: "If your payment fails, the amount will be automatically refunded within 5-7 working days. You can check the status of your refund in the 'My Bookings' section. For immediate assistance, contact our 24/7 customer support."
        },
        {
          question: "Can I use international cards for payment?",
          answer: "Yes, redBus accepts international credit and debit cards. Make sure your card is enabled for online international transactions. Some additional charges may apply based on your card issuer's policies."
        },
        {
          question: "How do I use the redBus wallet?",
          answer: "The redBus wallet can be loaded using any payment method. Wallet balance can be used for ticket bookings and offers faster refunds. You can check your wallet balance in the 'My Wallet' section of your account."
        },
        {
          question: "Are there any additional charges for payments?",
          answer: "redBus doesn't charge any additional fees for payments. However, your bank or payment provider might charge a small fee for certain payment methods. Any applicable charges will be clearly displayed before payment."
        },
        {
          question: "Can I pay for my ticket at the boarding point?",
          answer: "No, all tickets must be paid for at the time of booking. redBus does not offer cash on delivery or pay-at-boarding options to ensure guaranteed seat reservation."
        }
      ],
      refund: [
        {
          question: "What is the cancellation policy?",
          answer: "Cancellation charges vary based on how early you cancel before the journey date. Cancellations made 24 hours before departure typically incur lower charges. Some buses may have special cancellation policies which are displayed during booking."
        },
        {
          question: "How long does it take to process refunds?",
          answer: "Refunds are processed within 24 hours of cancellation. The amount is credited back to your original payment method within 5-7 working days, depending on your bank's processing time."
        },
        {
          question: "Can I get a refund if I miss my bus?",
          answer: "No, refunds are not provided for missed buses. However, if you miss your bus due to a delayed connecting redBus service, you may be eligible for compensation under our delay protection policy."
        },
        {
          question: "How do I cancel my ticket?",
          answer: "You can cancel your ticket through the 'My Bookings' section on the website/app. Select the booking you want to cancel and follow the cancellation process. Cancellation fees will be shown before confirmation."
        },
        {
          question: "Are cancellation charges the same for all buses?",
          answer: "No, cancellation charges vary by operator and how close to departure you cancel. The exact charges are displayed during booking and can also be viewed in the cancellation policy section of your ticket."
        },
        {
          question: "What if the bus operator cancels the trip?",
          answer: "If the operator cancels the trip, you will receive a full refund automatically. You'll be notified via SMS and email, and the refund will be processed within 24 hours."
        },
        {
          question: "Can I get a refund to my redBus wallet?",
          answer: "Yes, you can choose to receive refunds in your redBus wallet for faster processing. Wallet refunds are usually processed within a few hours and can be used for future bookings."
        }
      ],
      insurance: [
        {
          question: "What does the travel insurance cover?",
          answer: "Our travel insurance covers trip cancellation, medical emergencies during travel, loss of luggage, and personal accidents. The coverage amount varies based on the insurance plan selected during booking."
        }
      ]
  };

  return (
    <section className="flex justify-center my-20 md:my-40">
      <div className="flex flex-col w-full px-6 md:px-0 md:w-[80%] max-w-[1300px]">
        <h1 className="text-gray-700 text-2xl md:text-[2.5rem] mb-6 md:mb-12">FREQUENTLY ASKED QUESTIONS</h1>
        
        <div className="flex gap-6 text-sm md:text-base lg:text-lg overflow-x-auto">
          <button 
            className={`py-2 px-2 whitespace-nowrap ${activeCategory === 'general' ? 'border-b-[3px] border-main-color text-main-color' : 'hover:border-b-[3px] border-gray-300'}`}
            onClick={() => setActiveCategory('general')}
          >
            General
          </button>
          <button 
            className={`py-2 px-2 whitespace-nowrap ${activeCategory === 'ticket' ? 'border-b-[3px] border-main-color text-main-color' : 'hover:border-b-[3px] border-gray-300'}`}
            onClick={() => setActiveCategory('ticket')}
          >
            Ticket-related
          </button>
          <button 
            className={`hidden sm:inline-block py-2 px-2 whitespace-nowrap ${activeCategory === 'payment' ? 'border-b-[3px] border-main-color text-main-color' : 'hover:border-b-[3px] border-gray-300'}`}
            onClick={() => setActiveCategory('payment')}
          >
            Payment
          </button>
          <button 
            className={`hidden sm:inline-block py-2 px-2 whitespace-nowrap ${activeCategory === 'refund' ? 'border-b-[3px] border-main-color text-main-color' : 'hover:border-b-[3px] border-gray-300'}`}
            onClick={() => setActiveCategory('refund')}
          >
            Cancellation & Refund
          </button>
          <button 
            className={`hidden sm:inline-block py-2 px-2 whitespace-nowrap ${activeCategory === 'insurance' ? 'border-b-[3px] border-main-color text-main-color' : 'hover:border-b-[3px] border-gray-300'}`}
            onClick={() => setActiveCategory('insurance')}
          >
            Insurance
          </button>
          <button className="sm:hidden py-2 px-2 whitespace-nowrap hover:border-b-[3px] border-gray-300 flex items-center gap-3">
            More <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>

        <div className="flex flex-col gap-6 md:gap-10 mt-11">
          {faqData[activeCategory].map((item, index) => (
            <div 
              key={index} 
              className="p-4 md:p-7 cursor-pointer bg-white rounded-2xl border border-gray-100"
              onClick={() => toggleQuestion(activeCategory, index)}
            >
              <div className="flex md:text-base text-sm justify-between items-center font-semibold gap-2">
                <h3>{item.question}</h3>
                {isQuestionOpen(activeCategory, index) ? (
                  <i className="fa-solid fa-minus"></i>
                ) : (
                  <i className="fa-solid fa-plus"></i>
                )}
              </div>
              <div className={`text-xs md:text-sm mt-6 ${isQuestionOpen(activeCategory, index) ? 'block' : 'hidden'}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;

