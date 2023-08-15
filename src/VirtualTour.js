import React, { useState, useEffect } from 'react';
import './VirtualTour.css';

const VirtualTour = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  useEffect(() => {
    const showStep = () => {
      const step = steps[currentStep];
      const element = document.querySelector(step.elementSelector);

      if (element) {
        const elementRect = element.getBoundingClientRect();
        const elementX = elementRect.left 
        const elementY = elementRect.top + elementRect.height ;

        const tourDiv = document.querySelector('.virtual-tour');
        tourDiv.style.left = `${elementX}px`;
        tourDiv.style.top = `${elementY}px`;

        element.classList.add('highlighted');
      }
    };

    showStep();
  }, [currentStep, steps]);

  return (
    <div className="virtual-tour">
      <div className="tour-content">
       
        <p>{steps[currentStep].content}</p>
      </div>
      <div className="tour-navigation">
        {currentStep > 0 && <button className='tour-button' onClick={previousStep}>Previous</button>}
        {currentStep < steps.length - 1 && <button className='tour-button' onClick={nextStep}>Next</button>}
        
      </div>
    </div>
  );
};

export default VirtualTour;










