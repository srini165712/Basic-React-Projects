import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title , info}) => {
const [toggle, settoggle] = useState(false);
const clickHandler = () =>{
  settoggle(!toggle)
}  
return(
  <article className = 'question'>
    <header>
      <h4>{title}</h4>
      {
      toggle?
      <button className = 'btn' onClick = {clickHandler}>
        
        <AiOutlineMinus></AiOutlineMinus>
      </button>
      :
      <button className = 'btn' onClick = {clickHandler}>
        <AiOutlinePlus></AiOutlinePlus>
      </button>
      }
    </header>
    {toggle && <p>{info}</p>}
  </article>
);
};

export default Question;
