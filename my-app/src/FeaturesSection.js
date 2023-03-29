import React from "react";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="container">
        <h3>MAKE MONEY THE FUN, EASY WAY</h3>
        <div className="features-container">
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-check"></i>
            </div>
            <h4>Why settle for a dull day job when you can earn a good income by taking up live chat jobs?
</h4>
            <p>
            This opportunity allows you to earn up to $500 per day by answering simple queries and chatting from the comfort of your home. You can enjoy a flexible work schedule and a good work-life balance, with weekly payments.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-check"></i>
            </div>
            <h4>WORK ONLINE FROM HOME</h4>
            <p>
            This is a flexible online job that allows you to work from anywhere, choose your own hours, and work as much or as little as you want.
            </p>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
