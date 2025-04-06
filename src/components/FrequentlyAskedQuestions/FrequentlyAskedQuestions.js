import React, { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import './FrequentlyAskedQuestions.css';


const FrequentlyAskedQuestions = () => {
  const [openItems, setOpenItems] = useState({0: true});
  const [displayCount, setDisplayCount] = useState(5);

  const faqData = [
    {
      question: "What is the duration of the programme?",
      answer: "Our programme is typically 4 years for B.Tech courses and 2 years for M.Tech courses. The duration may vary depending on the specific course you choose."
    },
    {
      question: "What is the eligibility criteria for admission?",
      answer: "For B.Tech: Minimum 60% in 12th standard with PCM. For M.Tech: Bachelor's degree in relevant field with minimum 60% marks. Entrance exam scores may be required."
    },
    {
      question: "What is the admission process?",
      answer: "The admission process includes: 1. Online application submission 2. Entrance exam 3. Document verification 4. Merit list declaration 5. Counseling and seat allocation"
    },
    {
      question: "Are scholarships available?",
      answer: "Yes, we offer various scholarships based on merit, family income, and special categories. Government scholarships and education loans are also facilitated."
    },
    {
      question: "What are the placement opportunities?",
      answer: "We have a dedicated placement cell with excellent track record. Top companies regularly visit for campus recruitment with competitive packages."
    },
    {
      question: "Is hostel facility available?",
      answer: "Yes, we provide separate hostels for boys and girls with modern amenities, 24/7 security, and mess facilities."
    },
    {
      question: "What are the laboratory facilities?",
      answer: "We have state-of-the-art laboratories for all departments equipped with modern instruments and latest software."
    },
    {
      question: "Are there any sports facilities?",
      answer: "Yes, we have extensive sports facilities including indoor and outdoor games, gymnasium, and professional coaches."
    },
    {
      question: "What extra-curricular activities are available?",
      answer: "We have various technical and cultural clubs, annual festivals, workshops, and seminars for holistic development."
    },
    {
      question: "Is there a medical facility on campus?",
      answer: "Yes, we have a medical center with qualified doctors and nurses available 24/7 for emergency services."
    }
  ];

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const loadMore = () => {
    setDisplayCount(prev => Math.min(prev + 5, faqData.length));
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.slice(0, displayCount).map((item, index) => (
          <div key={index} className="faq-item">
            <button type='button'
              className="faq-question"
              onClick={() => toggleItem(index)}
              aria-expanded={openItems[index]}
            >
              <span>{item.question}</span>
              {openItems[index] ? (
                <ChevronUpIcon className="faq-icon" />
              ) : (
                <ChevronDownIcon className="faq-icon" />
              )}
            </button>
            <div className={`faq-answer ${openItems[index] ? 'open' : ''}`}>
              {item.answer}
            </div>
            <div className="faq-divider" />
          </div>
        ))}
      </div>
      {displayCount < faqData.length ? (
        <button type='button' onClick={loadMore} className="load-more-button">
         👉 Load More Questions
        </button>
      ) : (
        <button type='button' disabled className="load-more-button disabled">
          🙊 No More Questions
        </button>
      )}
    </div>
  );
};

export default FrequentlyAskedQuestions;