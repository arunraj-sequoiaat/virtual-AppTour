import React from 'react';
import Intro from './Intro';

const SideSection = ()=>{
    return(
        <div className='Sidesection'>

        <ul><a href='#menu' id='open'>Open</a></ul>
        <ul><a href='#menu' id='file'>File</a></ul>
        <ul><a href='#menu' id='zoom'>Zoom in</a></ul>
        <ul><a href='#menu' id='hide'>Hide Description</a></ul>
        <ul><a href='#menu' id='download'>Download Image</a></ul>
        
        </div>
    );
};

export default SideSection;