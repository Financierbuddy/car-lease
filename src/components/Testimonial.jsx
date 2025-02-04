import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Testimonial.css";
import { IoChevronForwardCircleOutline, IoChevronBackCircleOutline } from "react-icons/io5";

const testimonials = [
  {
    id: 1,
    text: "Very good experience, not pushy and very cooperative. Clear communication to me as a customer and the Dealer.",
    author: "Mr. Veldman",
    position: "Veldman Maintenance and Service",
    avatar: "https://via.placeholder.com/80",
  },
  {
    id: 2,
    text: "The service was top-notch! I am impressed by the dedication and quality delivered.",
    author: "Jane Doe",
    position: "CEO, Startup Inc.",
    avatar: "https://via.placeholder.com/80",
  },
  {
    id: 3,
    text: "Amazing experience. The team is professional and very attentive to detail.",
    author: "John Smith",
    position: "Founder, Tech World",
    avatar: "https://via.placeholder.com/80",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="testimonial-section screen_max_width">
      <div className='p-2 w-[200px] text-center inline-block rounded-full bg-gray-100 text-black font-light'>Testimonial✨</div>

      <h2 className=' heading text-black'>  Reviews from other entrepreneurs</h2>


      <div className="flex items-center w-full">
        <button className="nav-button" onClick={handlePrev}>
          <IoChevronBackCircleOutline className="text-4xl" />

        </button>
        <motion.div
          className="testimonial-card"
          key={testimonials[currentIndex].id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
          <p className="testimonial-author">
            – {testimonials[currentIndex].author},{" "}
            <span className="font-normal"> {testimonials[currentIndex].position}</span>
          </p>
          <div className="avatar-group">
            {testimonials.map((item, index) => (
              <img
                key={item.id}
                src={item.avatar}
                alt={item.author}
                className={`avatar ${currentIndex === index ? "active-avatar" : ""
                  }`}
              />
            ))}
          </div>
        </motion.div>

        <button className="nav-button" onClick={handleNext}>
          <IoChevronForwardCircleOutline className="text-4xl" />

        </button>

      </div>
    </div>
  );
};

export default Testimonial;
