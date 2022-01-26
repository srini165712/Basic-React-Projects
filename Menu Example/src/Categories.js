import React from 'react';

const Categories = ({filteritems , categorynames}) => {
  return(
    <div className = 'btn-container'>
      <button key = 'All' className = 'filter-btn' onClick = {()=>{
              filteritems()
            }}>All</button>
      {categorynames.map((item)=>{
          return(
            <button key = {item} className = 'filter-btn' onClick = {()=>{
              filteritems(item)
            }}>{item}</button>      
          );
        })
      }
      
      
    </div>
  );
};

export default Categories;
