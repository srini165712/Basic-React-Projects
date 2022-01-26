import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [index,setindex] = useState(0);
  const [ques,setques] = useState(data);
  return (
    <div className = 'container'>
      <h3>Question And Answer</h3>
      <section className = 'info'>
        {
          ques.map((quess)=>{
            return <SingleQuestion key = {quess.id} {...quess}></SingleQuestion>
          })
        }
      </section>  
    </div>
);

}

export default App;
