import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setindex] = useState(0);
  const {name,job,image,text} = people[index];
  
  const GenerateRandom = () => {
    let n = Math.floor(Math.random() * people.length);
    if (n === index){
      n = GenerateRandom();
    }
    return n;
  }
  const nextHandler = () =>{
    setindex((index) =>{
      if (index < people.length - 1)
        return index + 1
      else{
        index  = 0;
        return index;
      };
    });
  }
  const prevHandler = () => {
    setindex((index) =>{
      if(index > 0)
      return index - 1;
      else{
        index = people.length -1 ;
        return index;
      }
    })
  }
  const suprise = ()=>{
    setindex(GenerateRandom());
  }
  return(
    <article className = 'review'>
      <div className='img-container'>
        <img src = {image} className = 'person-img'></img>
        <span className = 'quote-icon'>
          <FaQuoteRight></FaQuoteRight>
        </span>
      </div>
      <h4 className = 'author'>{name}</h4>
      <p className = 'job'>{job}</p>
      <p className = 'info'>{text}</p>
      <div className = 'button-container'>
        <button className = 'prev-btn' onClick = {prevHandler}>
          <FaChevronLeft></FaChevronLeft>
        </button>
        <button className = 'next-btn' onClick = {nextHandler}>
          <FaChevronRight></FaChevronRight>
        </button> 
      </div>  
      <button className = 'random-btn' onClick = {suprise}>
          Suprise
      </button>
    </article>
  );

};

export default Review;
