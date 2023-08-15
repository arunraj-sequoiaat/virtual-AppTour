import React from 'react';
import './App.css';
import VirtualTour from './VirtualTour';
import image1 from './images/Image.webp';
import SideSection from './Side-Section';



function App() {
  const tourSteps = [
    { elementSelector: '#home', content: 'Step 1: Welcome to Element 1' },
    { elementSelector: '#edit', content: 'Step 2: Discover Element 2' },
    { elementSelector: '#save', content: 'Step 1: Welcome to Element 3' },
    { elementSelector: '#save-as', content: 'Step 2: Discover Element 4' },
    { elementSelector: '#delete', content: 'Step 1: Welcome to Element 1' },
    { elementSelector: '#open', content: 'Step 2: Discover Element 4' },
    { elementSelector: '#heading', content: 'Step 2: Discover Element 2' },
    { elementSelector: '#heading1', content: 'Step 1: Welcome to Element 3' },
    
    
  ];
  return (
    <div className="App">
      
      <header className="App-header">
      
        <ul><a href="#home" id='home'>Home</a></ul>
        <ul><a href="#edit" id='edit'>Edit</a></ul>
        <ul><a href="#Save" id='save'>Save</a></ul>
        <ul><a href="#Save As" id='save-as'>Save As</a></ul>
        <ul><a href="#delete" id='delete'>Delete</a></ul>
        
      </header>
      
      <figure className='figure'>
      <img src={image1} alt={''}/>
      <figcaption>
         <h1 id='heading'>This is an image</h1>
         <p id='description'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
           incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
           exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          </p>
      </figcaption>
      <figcaption>
         <h1 id='heading1'>This is an image</h1>
         <p id='description1'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
           incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
           exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          </p>
      </figcaption>
      <figcaption>
         <h1 id='heading2'>This is an image</h1>
         <p id='description2'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
           incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
           exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          </p>
      </figcaption>
      </figure>
      <SideSection/>
      <VirtualTour steps={tourSteps} />
         
    </div>
  );
}

export default App;


