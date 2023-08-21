import React, { useState, useEffect } from 'react';
import './VirtualTour.css';

const VirtualTour = ( {customStyles, customSteps,buttonStyles}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [highlightedElement, setHighlightedElement] = useState(null);
  const [tourClosed, setTourClosed] = useState(false);


  const  tourSteps  =    customSteps || [
    { elementSelector: '#home', content: ' This is the home section ' },
    { elementSelector: '#edit', content: ' This is th edit section where we can edit' },
    { elementSelector: '#save', content: 'This section s usd to save things' },
    { elementSelector: '#save-as', content: 'This section helps you to save the image with unique names' },
    { elementSelector: '#delete', content: ' Here yo can delete the image ' },
    { elementSelector: '#open', content: ' Here you can open the existing image' },
    { elementSelector: '#file', content: ' Here youcan select the files' },
    { elementSelector: '#zoom', content: ' Here you can zoom the image' },
    { elementSelector: '#hide', content: 'Here you can hide the description of the image' },
    { elementSelector: '#download', content: 'Here you can download the image' },
    { elementSelector: '#image', content: 'This section shows you the image' },
    { elementSelector: '#heading', content: 'This section shows the heading of the viewing image' },
    { elementSelector: '#description', content: ' Here we can see the description of the image' },
    { elementSelector: '#heading1', content: ' This section shows the heading 1 of the viewing image ' },
    { elementSelector: '#description1', content: 'Here we can see the description 1 of the image' }
  ]  ;

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const closeTour = () => {
    setTourClosed(true);
  };

  useEffect(() => {
    if (!tourClosed) {
        const showStep = () => {
        const step = tourSteps[currentStep];
        const element = document.querySelector(step.elementSelector);

        if (highlightedElement) {
          highlightedElement.classList.remove('highlighted');
        }

        if (element) {
          // const elementRect = element.getBoundingClientRect();
          // const elementX = elementRect.left+2;
          // const elementY = elementRect.top + elementRect.height;
          const tourDiv = document.querySelector('.virtual-tour');
          const elementX = element.offsetLeft;
          const elementY = element.offsetTop + element.offsetHeight;
          tourDiv.style.left = `${elementX}px`;
          tourDiv.style.top = `${elementY}px`;

          

          // const tourDiv = document.querySelector('.virtual-tour');
          // tourDiv.style.left = `${elementX}px`;
          // tourDiv.style.top = `${elementY}px`;

          const viewportHeight = window.innerHeight;
          const tourDivBottom = elementY + tourDiv.offsetHeight;
          if (elementY < window.scrollY) {
            
            window.scrollTo({
              top: elementY - window.innerHeight/2 ,
              behavior: 'smooth',
            });
          } else if (tourDivBottom > viewportHeight) {
            
            window.scrollTo({
              top: elementY - window.innerHeight/2,
              behavior: 'smooth',
            });
          }

             element.classList.add('highlighted');
             setHighlightedElement(element);
          }

           };

      showStep();

      return () => {
        if (highlightedElement) {
            highlightedElement.classList.remove('highlighted');
        }
      };
    }
  }, [currentStep, tourSteps, highlightedElement, tourClosed]);

  if (tourClosed) {
    return null;
  }

  return (
    <div className={`virtual-tour ${tourClosed ? 'closed' : ''}`} style={customStyles}>
      {!tourClosed && <div className="blurred-overlay"></div>}
      <div className="tour-content">
        {highlightedElement && (
          <div className="highlighted-element-info">
            <p>{highlightedElement.id}</p>
          </div>
        )
        }
        <p>{tourSteps[currentStep].content}</p>
        
      </div>
      <div className="tour-navigation">
        <div className="tour-buttons">
          {currentStep > 0 && <button className='tour-button' style = {buttonStyles} onClick={previousStep}>Back</button>}
          {currentStep < tourSteps.length - 1 && <button className='tour-button'style = {buttonStyles}  onClick={nextStep}>Next</button>}
          <button className='tour-button'style = {buttonStyles}  onClick={closeTour}>Skip</button>
        </div>
      </div>
    </div>
  );
};



export default VirtualTour;










