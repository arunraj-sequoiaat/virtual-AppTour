import React, { useState, useEffect } from 'react';
import './VirtualTour.css';

const VirtualTour = ( {customStyles, customSteps,buttonStyles}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [highlightedElement, setHighlightedElement] = useState(null);
  const [tourClosed, setTourClosed] = useState(false);


  const  tourSteps  =    customSteps || [
    // { elementSelector: '#home', content: ' Welcome to Element 1' },
    // { elementSelector: '#edit', content: ' Discover Element 2' },
    // { elementSelector: '#save', content: ' Welcome to Element 3' },
    // { elementSelector: '#save-as', content: 'Discover Element 4' },
    // { elementSelector: '#delete', content: ' Welcome to Element ' },
    // { elementSelector: '#open', content: ' Discover Element 4' },
    // { elementSelector: '#file', content: ' Discover Element 4' },
    // { elementSelector: '#zoom', content: ' Discover Element 4' },
    // { elementSelector: '#hide', content: 'Discover Element 4' },
    // { elementSelector: '#download', content: 'Discover Element 4' },
    // { elementSelector: '#image', content: ' Discover Element 4' },
    // { elementSelector: '#heading', content: 'Discover Element 2' },
    // { elementSelector: '#description', content: ' Welcome to Element 3' },
    // { elementSelector: '#heading1', content: ' Discover Element 2' },
    // { elementSelector: '#description1', content: 'Welcome to Element 3' },
    // { elementSelector: '#heading2', content: ' Discover Element 2' },
    // { elementSelector: '#description2', content: ' Welcome to Element 3' }
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










