import React from 'react';
import {Link} from 'react-router-dom';

const SideSection = () => {
  return (
   
    <div className="page-wrapper">
      <div className='Sidesection'>
        <ul><Link to='/openpage' id='open'> Open</Link></ul>
        <ul><a href='#menu' id='file'>File</a></ul>
        <ul><a href='#menu' id='zoom'>Zoom in</a></ul>
        <ul><a href='#menu' id='hide'>Hide Description</a></ul>
        <ul><a href='#menu' id='download'>Download Image</a></ul>
      </div>
    </div>
   
  );
};

export default SideSection;
