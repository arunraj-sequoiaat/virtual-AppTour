
import './App.css';
import SideSection from './Side-Section';
import image1 from './images/Image.webp';


function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      
        <ul><a href="#home">Home</a></ul>
        <ul><a href="#home">Edit</a></ul>
        <ul><a href="#home">Save</a></ul>
        <ul><a href="#home">Save As</a></ul>
        <ul><a href="#home">Delete</a></ul>
        
      </header>
      <figure className='figure'>
      <img src={image1} alt={''}/>
      <figcaption>
         <h1>This is an image</h1>
         <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
           incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
           exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          </p>
      </figcaption>
      </figure>
      <SideSection/>
      
      
    </div>
  );
}

export default App;


