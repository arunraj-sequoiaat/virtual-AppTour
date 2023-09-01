import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

import VirtualTour from './VirtualTour';
import image1 from './images/Image.webp';
import SideSection from './Side-Section';

// const customSteps = [
//     { elementSelector: '#home', content: ' Welcome to Element 1' },
//     { elementSelector: '#edit', content: ' Discover Element 2' },
//     { elementSelector: '#save', content: ' Welcome to Element 3' },
//   ]
//   const buttonStyles = {
//     backgroundColor: 'blue',
//     color: 'white', 
//   };

//     const customStyles={
//     borderRadius: '4px',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)'
//   }

function App() {

 
  return (
   
       <div className="App">
      
      <header className="App-header">
      
          <ul><Link to="/" id='home'>Home</Link></ul>
          <ul><Link to="/Edit" id='edit'>Edit</Link></ul>
          <ul><Link to="/save" id='save'>Save</Link></ul>
          <ul><Link to="/save-as" id='save-as'>Save As</Link></ul>
          <ul><Link to="/delete" id='delete'>Delete</Link></ul>
        
      </header>
       
      <figure className='figureContainer'>
      <img id='image' className='image' src={image1} alt={''}/>
      <figcaption>
         <h1 id='heading'>This is an image</h1>
         <p id='description'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
           incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
           exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          </p>
      </figcaption>
      
      <figcaption>
         <h1 id='heading1'>This is about the image</h1>
         <p id='description1'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
           incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
           exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          </p>
      </figcaption>

      </figure>

      <SideSection/>
      <VirtualTour/>
       {/* customSteps={customSteps}
       buttonStyles={buttonStyles} 
       customStyles={customStyles} */}
      
         
    </div>
   
  );
}

export default App;


