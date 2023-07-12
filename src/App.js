
import './App.css';
import SideSection from './Side-Section';
import image1 from './images/Image.webp';
import Intro from './Intro';







  
  const App = () => {
    const steps = [
      {
        element: '#home',
        intro: 'This section takes you to the Home of the application',
      },
      {
        element: '#edit',
        intro: 'This section helps you to edit the image.',
      },
      {
        element: '#save',
        intro: '"Here you can save the changes you made to an image',
      },
      {
        element: '#save-as',
        intro: 'Here you can save the image as you wish.',
      },
      {
        element: '#delete',
        intro: 'Here you can throw the image to the bin.',
      },
      {
        element: '#open',
        intro: 'Here you can open the image you need',
      },
      {
        element: '#file',
        intro: 'This is the section of the files',
      },
      {
        element: '#zoom',
        intro: 'Here you can see it close',
      },
      {
        element: '#hide',
        intro: 'Here you can hide the descripton',
      },
      {
        element: '#download',
        intro: 'Here you can download the image',
      },
      {
        element: '#heading',
        intro: 'This shows the title of the image',
      },
      {
        element: '#description',
        intro: 'This is the description about the image shown',
      },
      
      
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
      </figure>
      <Intro steps={steps}/>
      <SideSection/>
      
      
      
      
    </div>
  );
}

export default App;


