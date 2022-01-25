import React, { useState } from 'react';

const Tour = ({id,image,info,price,name,removetour})  => {
  const [read,setread] = useState(true)

  return(
    <article className = 'single-tour'>
      <img src = {image} lat = 'Sorry'></img>
      <footer>
        <div className = 'tour-info'>
          <h4>{name}</h4>
          <h4 className = 'tour-price'>${price}</h4>
        </div>
        <p>
          {read?info:`${info.substring(0,200)}...`}
          <button onClick = {()=>{setread(!read)}}>
            {read?'ReadLess':'ReadMore'}
          </button>
        </p>
        <button className = 'delete-btn' onClick = {()=>removetour(id)}>Not Interested</button>
      </footer>
    </article>
  );
};

export default Tour;
